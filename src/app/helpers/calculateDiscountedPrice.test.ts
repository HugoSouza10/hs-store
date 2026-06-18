import { describe, expect, it } from "vitest";
import { calculateDiscountedPrice } from "./calculatePricing";
import { ProductModel } from "@/generated/prisma/models";
import { Decimal } from "@prisma/client/runtime/client";
import { makeProduct } from "../../test/factories/make-product";

describe("calculateDiscountedPrice", () => {
  //Verificar se está aplicando desconto
  it("deve aplicar desconto de 10%", () => {
    const product = makeProduct({
      basePrice: new Decimal(100),
      discountPercentage: 10,
    });

    const result = calculateDiscountedPrice(product);

    expect(result.productWithDiscount).toBe(90);
  });
  it("deve aplicar desconto de 100%", () => {
    const product = makeProduct({
      basePrice: new Decimal(100),
      discountPercentage: 100,
    });

    const result = calculateDiscountedPrice(product);

    expect(result.productWithDiscount).toBe(0);
  });
});
