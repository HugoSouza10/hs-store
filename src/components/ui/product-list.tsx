import { Product } from "@/types/product";
import { calculateDiscountedPrice } from "../../app/helpers/calculatePricing";
import { ProductItem } from "./product-item";

interface ProductListProps {
    products: Product[];
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