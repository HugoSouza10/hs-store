import { calculateDiscountedPrice } from "../../app/helpers/calculatePricing";
import { ProductItem } from "./product-item";
import type { ProductModel } from "@/generated/prisma/models";

interface ProductListProps {
    products: ProductModel[];
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="flex w-full mt-5 mb-7 gap-4 overflow-x-auto  [&::-webkit-scrollbar]:hidden">
          {products.length > 0 ? (
            products.map((product)=>
              <ProductItem product={calculateDiscountedPrice(product)} key={product.id}/>
            )
          ) : (
            <p>Nenhum produto encontrado</p>
          )}
        </div>
    )
}