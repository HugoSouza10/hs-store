//server-only serve para garantir que um módulo seja usado apenas no servidor no Next.js.
import "server-only";
import { db } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

//Cache para pegar um produto por categoria do lado do servidor
export async function getProductsByCategory(slug: string) {
  return unstable_cache(
    async () => {
      return db.product.findMany({
        where: {
          category: {
            slug,
          },
        },
        take: 10
      });
    },
    [`products-category-${slug}`],
    {
      revalidate: 600,
    }
  )();
}