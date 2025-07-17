"use client"
import Image from "next/image"
import { Badge } from "./badge"
import Link from "next/link"
import { CartProduct, useCart } from "@/context/CartContext";
import { ProductWithDiscount } from "@/app/helpers/calculatePricing";

interface ProductListProps {
    product: ProductWithDiscount;
}

export const ProductItem = ({product}: ProductListProps) => {
   const { addProduct } = useCart();

  const handleAddProduct = () => {
        const cartProduct: CartProduct = {
            ...product,
            quantity: 1 // Valor padrão ao adicionar ao carrinho
        };
        addProduct(cartProduct);
   }
   return (
   <>
    {/*Area da foto */}
    <Link href={`product/${product.slug}`}>
      <div className="flex-col gap-4 px-0">
      
         <div className="relative flex flex-col items-center justify-center rounded-sm w-[156px] h-[170px] bg-accent">
            {/* Tag de desconto */}
            <div className="absolute p-2 top-0 left-0 font-bold">
            {product.discountPercentage > 0 &&(
                  <Badge onClick={handleAddProduct} className="rounded-full">
                     {product.discountPercentage}%
                  </Badge> 
            )}
            </div>
            <Image
                  src={product.imageUrls[0]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h[70%] w-auto max-w-[80%]"
                  style={{
                     objectFit:'contain'
                  }}
                  alt={product.slug}
               />
         </div>
         <div className="mt-4">
            <div className="max-w-[150px]"> {/* Container com largura máxima */}
               <span className="truncate block"> {/* "block" para ocupar a largura total */}
                  {product.name}
               </span>
            </div>
            <div>
               <span className="font-bold">R$: {product.productWithDiscount}</span>
               <span className="text-xs ml-1 line-through text-[#676767]">R$: {product.basePrice}</span>
            </div>
         </div>
      </div>
    </Link>
   </>
   
   )
}