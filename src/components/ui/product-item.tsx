import Image from "next/image"
import { Badge } from "./badge"
import Link from "next/link"
import { Product } from "@/types/product";

interface ProductListProps {
    products: Product;
}


export const ProductItem = ({products}: ProductListProps) => {
   return (
   <>
    {/*Area da foto */}
    <Link href={`product/${products.slug}`}>
      <div className="flex-col gap-4 px-0">
      
         <div className="relative flex flex-col items-center justify-center rounded-sm w-[156px] h-[170px] bg-accent">
            {/* Tag de desconto */}
            <div className="absolute p-2 top-0 left-0 font-bold">
            {products.discountPercentage > 0 &&(
                  <Badge className="rounded-full">
                     {products.discountPercentage}%
                  </Badge> 
            )}
            </div>
            <Image
                  src={products.imageUrls[0]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h[70%] w-auto max-w-[80%]"
                  style={{
                     objectFit:'contain'
                  }}
                  alt={products.slug}
               />
         </div>
         <div className="mt-4">
            <div className="max-w-[150px]"> {/* Container com largura máxima */}
               <span className="truncate block"> {/* "block" para ocupar a largura total */}
                  {products.name}
               </span>
            </div>
            <div>
               <span className="font-bold">R$: {products.productWithDiscount}</span>
               <span className="text-xs ml-1 line-through text-[#676767]">R$: {products.basePrice}</span>
            </div>
         </div>
      </div>
    </Link>
   </>
   
   )
}