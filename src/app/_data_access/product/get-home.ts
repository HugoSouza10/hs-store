import { unstable_cache } from "next/cache";
import { db } from "@/lib/prisma";

export const productSelect = {
  id: true,
  name: true,
  slug: true,
  basePrice: true,
  discountPercentage: true,
  imageUrls: true,
};
//Cache para pegar os produtos da home
export const getHomeProducts = unstable_cache(
  async () => {
    const [deals, keyboards, mouses] = await Promise.all([
      db.product.findMany({
        where: {
          discountPercentage: {
            gt: 0,
          },
        },
        take: 10,
      }),

      db.product.findMany({
        where: {
          category: {
            slug: "keyboards",
          },
        },
        take: 10,
      }),

      db.product.findMany({
        where: {
          category: {
            slug: "mouses",
          },
        },
        take: 10
      }),
    ]);

    return {
      deals,
      keyboards,
      mouses,
    };
  },
  ["home-products"],
  {
    revalidate: 60 * 10,
  }
);