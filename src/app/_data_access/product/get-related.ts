import { db } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export async function getProductsByRelated(product: { id: string; categoryId: string }) {
  return unstable_cache(
    async () => {
      return db.product.findMany({
        where: {
          categoryId: product.categoryId,
          NOT: {
            id: product.id,
          },
        },
        take: 10,
      });
    },
    [`related-products-${product.id}`],
    {
      revalidate: 600,
    },
  )();
}
