import { ProductItem } from "@/components/ui/product-item";
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import type { ProductModel } from "@/generated/prisma/models";
import { CATEGORY_ICON } from "@/constants/categories-icon";
import { db } from "@/lib/prisma";

interface CategoryProps {
  params: {
    slug: string;
  };
};
export default async function Category({ params: { slug } }: CategoryProps) {
  //Precisamos pegar os produtos baseado no slug
  const data = await db.product.findMany({
    where: {
      category: {
        slug: slug
      }
    }
  });
  return (
    <>
      <div className="flex justify-center items-center border border-primary uppercase p-3 mb-7 ml-5 rounded-full w-fit text-xs font-bold">
        <div className="pr-2">
          {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        </div>
        {slug}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 ml-4 mr-4 mb-7">
        {data.length > 0 ? (
          data.map((product: ProductModel) => (
            <ProductItem
              product={calculateDiscountedPrice(product)}
              key={product.id}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </>
  );
}
