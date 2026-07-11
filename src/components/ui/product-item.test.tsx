import { ProductItem } from "./product-item";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { makeProductWithDiscount } from "@/test/factories/makeProductWithDiscount";

//Aqui fizemos teste unitário usando o react test libray
describe("ProductItem", () => {
  const mockProduct = makeProductWithDiscount({
    name: "Produto Teste",
    productWithDiscount: 80,
    discountPercentage: 20,
  });

  it("Deve renderizar o nome do produto", () => {
    render(<ProductItem product={mockProduct} />);
    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
  });

  it("deve renderizar o preço com desconto", () => {
    render(<ProductItem product={mockProduct} />);
    expect(screen.getByText("R$ 80,00")).toBeInTheDocument();
  });

  it("deve renderizar o preço base do produto", () => {
    render(<ProductItem product={mockProduct} />);
    expect(screen.getByText("R$ 100,00")).toBeInTheDocument();
  });

  it("deve renderizar a imagem com alt correto", () => {
    render(<ProductItem product={mockProduct} />);
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", mockProduct.slug);
  });

  it("deve renderizar a imagem com url correta", () => {
    render(<ProductItem product={mockProduct} />);
    const image = screen.getByRole("img");

    expect(image.getAttribute("src")).toContain("utfs.io");
  });

  it("deve renderizar o link para a página do produto", () => {
    render(<ProductItem product={mockProduct} />);
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/product/${mockProduct.slug}`);
  });
});
