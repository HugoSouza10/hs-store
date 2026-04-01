import {Grid2X2X } from "lucide-react";
import Link from "next/link";
import { CardCatalog } from "./components/card";
import { db } from "@/lib/prisma";
import type { CategoryModel } from "@/generated/prisma/models";

// Componente de categoria no lado do servidor
export default async function CategoriesPage() {
  // Função para buscar as categorias no servidor
  const categories = await db.category.findMany(); // Busca as categorias diretamente no servidor

  console.log(categories)
  return (
    <div className="pl-4 pr-4">
      <div className="flex justify-center items-center border border-primary uppercase p-3 rounded-full w-fit text-xs font-bold">
        <div className="pr-2">
          <Grid2X2X size={16} />
        </div>
        CATÁLOGO
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-7">
        {categories.map((item: CategoryModel) => (
          <Link href={`category/${item.slug}`} key={item.slug}>
            <CardCatalog {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
