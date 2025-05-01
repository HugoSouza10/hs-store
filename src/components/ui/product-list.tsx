import { Product } from "@/types/product";
import { calculateDiscountedPrice } from "../../app/helpers/calculatePricing";
import { ProductItem } from "./product-item";

interface ProductListProps {
    products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
    console.log(products)
    return (
        <div className="flex w-full mt-5 mb-7 gap-4 overflow-x-auto  [&::-webkit-scrollbar]:hidden">
          {products.map((product: any, key=product.id)=>
               <ProductItem products={calculateDiscountedPrice(product)} key={key}/>
            )}
        </div>
    )
}