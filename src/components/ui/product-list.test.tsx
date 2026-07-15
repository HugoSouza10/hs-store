import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductList } from "./product-list";
import { makeProduct } from "@/test/factories/make-product";
import { Decimal } from "@prisma/client/runtime/client";

describe("ProductList", () => {
  const products = [
    makeProduct({
      id: "1",
      name: "Teclado",
      slug: "teclado",
      basePrice: new Decimal(100),
    }),
    makeProduct({
      id: "2",
      name: "Mouse",
      slug: "mouse",
      basePrice: new Decimal(200),
    }),
  ];
  it("deve exibir uma mensagem quando não houver produtos", () => {
    render(<ProductList products={[]} />);

    expect(screen.getByText("Nenhum produto encontrado")).toBeInTheDocument();
  });
  it("deve renderizar todos os produtos recebidos", () => {
    render(<ProductList products={products} />);
    expect(screen.getByText("Teclado")).toBeInTheDocument();
    expect(screen.getByText("Mouse")).toBeInTheDocument();
  });

  it("deve renderizar um link para cada produto", () => {
    render(<ProductList products={products} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
  });
});
