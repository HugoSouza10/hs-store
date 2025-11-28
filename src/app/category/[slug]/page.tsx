import { ProductItem } from "@/components/ui/product-item";
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import { getProductsByCategory } from "@/app/_data_access/productData";
import { Product } from "@/types/product";
import { CATEGORY_ICON } from "@/constants/categories-icon";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  //Precisamos pegar os produtos baseado no slug
  const data = await getProductsByCategory(slug);
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
          data.map((product: Product) => (
            <ProductItem
              product={calculateDiscountedPrice(product)}
              key={product.id}
              layout="grid"
            />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </>
  );
}
