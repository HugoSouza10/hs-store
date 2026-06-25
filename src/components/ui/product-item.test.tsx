import { ProductWithDiscount } from "@/app/helpers/calculatePricing";
import { Decimal } from "@prisma/client/runtime/client";
import { ProductItem } from "./product-item";
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';

describe("ProductItem", () => {
  const mockProduct: ProductWithDiscount = {
    id: "1",
    name: "Produto Teste",
    slug: "produto-teste",
    basePrice: new Decimal(100),
    productWithDiscount: 80,
    discountPercentage: 20,
    imageUrls: ["https://utfs.io/f/834b0e30-45bc-47dd-b2c1-bfe65ef62eb2-m9yl8y.png"],
    description: "Descrição do produto",
    categoryId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it("Deve renderizar o nome do produto", () => {
    render(<ProductItem  product={mockProduct}/>)
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
  });


});
