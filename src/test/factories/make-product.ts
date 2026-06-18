import { ProductModel } from "@/generated/prisma/models";
import { Decimal } from "@prisma/client/runtime/client";

export function makeProduct(
  overrides: Partial<ProductModel> = {}
): ProductModel {
  return {
    id: "1",
    name: "Teclado",
    slug: "teclado",
    description: "Descrição",
    basePrice: new Decimal(100),
    discountPercentage: 0,
    imageUrls: [],
    categoryId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}