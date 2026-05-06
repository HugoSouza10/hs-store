import { z } from "zod";

export const createOrderSchema = z.object({
  subtotal: z.number().positive(),
  discount: z.number().nonnegative(),
  total: z.number().positive(),

  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        quantity: z.number().int().positive(),
        price: z.number().positive(),
      }),
    )
    .min(1, "Pedido deve ter ao menos 1 item"),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
