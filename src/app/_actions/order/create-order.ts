"use server";

import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { createOrderSchema } from "./schemas";
import { actionClient } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";

export const createOrder = actionClient
  .schema(createOrderSchema)

  .action(async ({ parsedInput }) => {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado");
    }

    const order = await db.order.create({
      data: {
        userId: session.user.id,

        subtotal: parsedInput.subtotal,
        discount: parsedInput.discount,
        total: parsedInput.total,

        status: "PAGO",

        items: {
          create: parsedInput.items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });
    revalidatePath("/my-orders");
    return order;
  });
