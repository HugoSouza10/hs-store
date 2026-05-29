"use server";

import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { createOrderSchema, CreateOrderInput } from "./schemas";

//Responsável por criar o pedido de acordo com usuário
export async function createOrder(cart: CreateOrderInput) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }
  const validatedCart = createOrderSchema.parse(cart);

  const order = await db.order.create({
    //Data: Sempre vai existir, pois no prisma a gente precisa especificar esses dados através desse objeto
    data: {
      userId: session.user.id,
      subtotal: validatedCart.subtotal,
      discount: validatedCart.discount,
      total: validatedCart.total,
      status: "PAGO",

      //Aqui vamos criar o OrderItem
      items: {
        create: validatedCart.items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
  });

  return order;
}
