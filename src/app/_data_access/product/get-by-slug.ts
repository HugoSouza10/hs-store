//server-only serve para garantir que um módulo seja usado apenas no servidor no Next.js.
import "server-only";
import { unstable_cache } from "next/cache";
import { db } from "@/lib/prisma";

//Cache para 1 produto por slug do lado do servidor
//Cacheando função do servidor, nesse caso usamos o unstable_cache
export async function getProductBySlug(slug: string) {
  return unstable_cache(
    async () => {
      return db.product.findUnique({
        where: {
          slug,
        },

        include: {
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      });
    },

    [`product-${slug}`],

    {
      revalidate: 60 * 10,
    }
  )();
}