"use server";

import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";

//Responsável por criar o pedido de acordo com usuário
export async function createOrder(cart: any) {
    console.log("Criando pedido com os seguintes dados:", cart);
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }

  console.log(cart)
  const order = await db.order.create({
    //Data: Sempre vai existir, pois no prisma a gente precisa especificar esses dados através desse objeto
    data: {
      userId: session.user.id,
      subtotal: cart.subtotal,
      discount: cart.discount,
      total: cart.total,
      status: "PENDING",

      //Aqui vamos criar o OrderItem
      items: {
        create: cart.items.map((item: any) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
  });

  return order;
}
