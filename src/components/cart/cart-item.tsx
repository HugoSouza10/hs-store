import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { Trash } from "lucide-react";
import Image from 'next/image';
import { ProductWithDiscount } from "@/app/helpers/calculatePricing";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

export default function CartItem({product}: any) {
    const { removeProduct } = useCart();

    const handleremoveProductFromCartClick = () => {
      removeProduct(product.id);
    }

    console.log(product);
    return (
      <>
        <div className="flex justify-between items-center gap-4 mt-7 mb-5">
            {/*Imagem do produto */}
             <Image
                src={`https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto max-w-20 bg-accent rounded-lg p-1"
                style={{
                    objectFit:'contain'
                }}
                alt='Imagem'
                />
             <div className="mt-4">
              <div> {/* Container com largura máxima */}
                <span className="truncate block text-xs"> {/* "block" para ocupar a largura total */}
                  {product.name}
                </span>
              </div>
              <div>
                <span className="font-bold text-sm">R$: {product.productWithDiscount}</span>
                <span className="text-xs ml-1 line-through text-[#676767]">R$: {product.basePrice}</span>
              </div>
              <QuantitySelector id={product.id} quantity={product.quantity}/>
            </div>
            <div onClick={handleremoveProductFromCartClick} className="flex items-center justify-center w-8 h-8 border border-[#1A1A1A] rounded-sm p-2">
              <Trash size={16}/>
            </div>
        </div>
      </>
    );
  }