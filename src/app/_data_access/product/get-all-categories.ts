import { unstable_cache } from "next/cache";
import { db } from "@/lib/prisma";

//Cache para categorias do lado do servidor
export const getCategories = unstable_cache(
  async () => {
    return db.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });
  },
  ["categories"],
  {
    revalidate: 3600,
  }
);