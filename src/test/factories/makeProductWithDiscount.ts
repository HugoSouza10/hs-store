import { makeProduct } from "./make-product";
import { ProductWithDiscount } from "@/app/helpers/calculatePricing";

export function makeProductWithDiscount(
  overrides: Partial<ProductWithDiscount> = {},
): ProductWithDiscount {
  return {
    ...makeProduct(),
    productWithDiscount: 100,
    ...overrides,
  };
}