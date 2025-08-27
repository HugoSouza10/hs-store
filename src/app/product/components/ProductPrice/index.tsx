import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

export const ProductPrice = ({ product }: { product: Product }) => {
  return (
    <div className="mt-4">
      <div>
        <div className="flex">
          <div className="font-bold text-xl">R$: {product.productWithDiscount}</div>
          {product.discountPercentage > 0 && (
            <Badge className="rounded-full ml-2">
                {product.discountPercentage}%
            </Badge>
          )}
          
        </div>

        <div className="text-xs line-through text-[#676767]">
          R$: {product.basePrice}
        </div>
      </div>
    </div>
  );
};
