import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { makeProductWithDiscount } from "@/test/factories/makeProductWithDiscount";
import { Decimal } from "@prisma/client/runtime/client";
import { CartProvider, useCart } from "@/context/CartContext";
import CartItem from "./cart-item";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

const product = makeProductWithDiscount({
  id: "produto-1",
  name: "produto-1",
  basePrice: new Decimal(100),
});

function CartItems() {
  const { products } = useCart();

  //CartItem vai pegar os produtos do contexto.
  //Na etapa anterior, a gente pegou e alimentou o contexto com um produto inicial
  // O CartItem vai pegar exatamente esse produto
  return (
    <>
      {products.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </>
  );
}

function QuantitySelectorComponent() {
  const { products } = useCart();

  //CartItem vai pegar os produtos do contexto.
  //Na etapa anterior, a gente pegou e alimentou o contexto com um produto inicial
  // O CartItem vai pegar exatamente esse produto
  return (
    <>
      {products.map((item) => (
        <QuantitySelector id={item.id} quantity={item.quantity} />
      ))}
    </>
  );
}

describe("CartItem", () => {
  it("deve remover o produto do carrinho", async () => {
    const user = userEvent.setup();

    //Renderiza o contexto e chama o componente CartItens
    render(
      <CartProvider
        initialProducts={[
          {
            ...product,
            quantity: 1,
          },
        ]}
      >
        <CartItems />
      </CartProvider>,
    );

    //Espero que o produto-1 esteja presente na tela.
    expect(screen.getByText("produto-1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /remover produto/i }));
    //Espero que o produto-1 não esteja presente na tela.
    expect(screen.queryByText("produto-1")).not.toBeInTheDocument();
  });

  it("deve diminuir quantidade", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider
        initialProducts={[
          {
            ...product,
            quantity: 2,
          },
        ]}
      >
        <QuantitySelectorComponent />
      </CartProvider>,
    );
    expect(screen.getByText("2")).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: /Diminuir quantidade/i }),
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("deve aumentar quantidade", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider
        initialProducts={[
          {
            ...product,
            quantity: 3,
          },
        ]}
      >
        <QuantitySelectorComponent />
      </CartProvider>,
    );
    expect(screen.getByText("3")).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: /Aumentar quantidade/i }),
    );
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
