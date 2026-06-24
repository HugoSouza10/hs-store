import { ProductWithDiscount } from "@/app/helpers/calculatePricing";
import { formatCurrency } from "@/app/helpers/currecy";
import { Badge } from "@/components/ui/badge";

export const ProductPrice = ({ product }: { product: ProductWithDiscount }) => {
  return (
    <div className="mt-4">
      <div>
        <div className="flex">
          <div className="font-bold text-xl">{formatCurrency(product.productWithDiscount)}</div>
          {product.discountPercentage > 0 && (
            <Badge className="rounded-full ml-2">
                {product.discountPercentage}%
            </Badge>
          )}
          
        </div>

        <div className="text-xs line-through text-[#676767]">
          {(formatCurrency(Number(product.basePrice)))}
        </div>
      </div>
    </div>
  );
};
