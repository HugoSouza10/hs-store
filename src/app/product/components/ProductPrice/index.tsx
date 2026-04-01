import { ProductWithDiscount } from "@/app/helpers/calculatePricing";
import { Badge } from "@/components/ui/badge";

export const ProductPrice = ({ product }: { product: ProductWithDiscount }) => {
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
          R$: {Number(product.basePrice).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
