import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import { CartProvider, useCart } from "./CartContext";
import { makeProductWithDiscount } from "@/test/factories/makeProductWithDiscount";
import { Decimal } from "@prisma/client/runtime/client";

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

const product = makeProductWithDiscount({
  id: "produto-1",
  basePrice: new Decimal(100),
});

const keyboard = makeProductWithDiscount({
  id: "produto-1",
  name: "Teclado",
  basePrice: new Decimal(100),
});

const mouse = makeProductWithDiscount({
  id: "produto-2",
  name: "Mouse",
  basePrice: new Decimal(50),
});

describe("CartContext", () => {
  describe("estado inicial", () => {
    it("deve iniciar com o carrinho vazio", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      expect(result.current.products).toEqual([]);
      expect(result.current.subtotal).toBe(0);
      expect(result.current.totalDiscount).toBe(0);
      expect(result.current.total).toBe(0);
    });
  });

  describe("addProduct", () => {
    it("deve adicionar um produto novo com quantidade igual a 1", () => {
      const product = makeProductWithDiscount({
        id: "produto-1",
      });

      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 10,
        });
      });

      expect(result.current.products[0].quantity).toBe(1);
    });

    it("não deve adicionar produto com quantidade menor ou igual a zero", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: -1,
        });
      });
      expect(result.current.products).toHaveLength(0);
    });

    it("deve incrementar a quantidade ao adicionar novamente o mesmo produto", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...product, quantity: 1 });
        result.current.addProduct({ ...product, quantity: 1 });
      });

      expect(result.current.products).toHaveLength(1);
      expect(result.current.products[0].quantity).toBe(2);
    });

    it("deve manter produtos diferentes como itens separados", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...keyboard, quantity: 1 });
        result.current.addProduct({ ...mouse, quantity: 1 });
      });

      expect(result.current.products).toHaveLength(2);
      expect(result.current.products[0].quantity).toBe(1);
      expect(result.current.products[1].quantity).toBe(1);
    });
  });
  describe("incrementProductQuantity", () => {
    it("deve incrementar a quantidade de acordo com o valor informado", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ ...product, quantity: 1 });
      });
      act(() => {
        result.current.incrementProductQuantity("produto-1", 3);
      });
      expect(result.current.products[0].quantity).toBe(4);
    });

    it("deve diminuir a quantidade do produto", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });

        result.current.incrementProductQuantity("produto-1", 2);
      });

      act(() => {
        result.current.incrementProductQuantity("produto-1", -1);
      });

      expect(result.current.products[0].quantity).toBe(2);
    });

    it("deve alterar apenas o produto com o ID informado", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ ...keyboard, quantity: 1 });
        result.current.addProduct({ ...mouse, quantity: 1 });
      });
      act(() => {
        result.current.incrementProductQuantity("produto-1", 2);
      });
      const keyboardInCart = result.current.products.find(
        (item) => item.id === "produto-1",
      );
      const mouseInCart = result.current.products.find(
        (item) => item.id === "produto-2",
      );

      expect(keyboardInCart?.quantity).toBe(3);
      expect(mouseInCart?.quantity).toBe(1);
    });

    it("deve remover o produto quando a quantidade chegar a zero", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });
      });

      act(() => {
        result.current.incrementProductQuantity("produto-1", -1);
      });

      expect(result.current.products).toHaveLength(0);
    });

    it("não deve alterar o carrinho quando o ID informado não existir", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });
      });

      act(() => {
        result.current.incrementProductQuantity("produto-inexistente", 5);
      });

      expect(result.current.products).toHaveLength(1);
      expect(result.current.products[0]).toEqual(
        expect.objectContaining({
          id: "produto-1",
          quantity: 1,
        }),
      );
    });
  });
  describe("removeProduct", () => {
    it("deve remover o produto com o ID informado", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...product, quantity: 1 });
      });

      act(() => {
        result.current.removeProduct("produto-1");
      });
      expect(result.current.products).toHaveLength(0);
    });

    it("não deve alterar o carrinho quando o ID não existir", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...product, quantity: 1 });
      });

      act(() => {
        result.current.removeProduct("produto-inexistente");
      });

      expect(result.current.products).toHaveLength(1);
      expect(result.current.products[0].id).toBe("produto-1");
    });
    it("deve remover apenas o produto informado e manter os demais", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...keyboard, quantity: 1 });
        result.current.addProduct({ ...mouse, quantity: 1 });
      });

      act(() => {
        result.current.removeProduct("produto-1");
      });

      expect(result.current.products).toHaveLength(1);
      expect(result.current.products[0]).toEqual(
        expect.objectContaining({
          id: "produto-2",
          name: "Mouse",
        }),
      );
    });
  });

  describe("clearCart", () => {
    it("deve remover todos os produtos do carrinho", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({ ...keyboard, quantity: 1 });
        result.current.addProduct({ ...mouse, quantity: 1 });
      });

      expect(result.current.products).toHaveLength(2);

      act(() => {
        result.current.clearCart();
      });

      expect(result.current.products).toEqual([]);
      expect(result.current.subtotal).toBe(0);
      expect(result.current.totalDiscount).toBe(0);
      expect(result.current.total).toBe(0);
    });
  });

  describe("subtotal", () => {
    it("deve calcular o subtotal de um produto considerando sua quantidade", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });
      });

      act(() => {
        result.current.incrementProductQuantity("produto-1", 2);
      });

      expect(result.current.subtotal).toBe(300);
    });

    it("deve calcular o subtotal de todos os produtos do carrinho", () => {
      const { result } = renderHook(() => useCart(), { wrapper });

      act(() => {
        result.current.addProduct({
          ...keyboard,
          quantity: 1,
        });

        result.current.addProduct({
          ...mouse,
          quantity: 1,
        });
      });

      act(() => {
        result.current.incrementProductQuantity("produto-1", 1);
      });

      expect(result.current.subtotal).toBe(250);
    });
  });

  describe("totalDiscount", () => {
    it("deve calcular corretamente o desconto total do carrinho com 20 porcento", () => {
      const product = makeProductWithDiscount({
        id: "produto-1",
        basePrice: new Decimal(100),
        productWithDiscount: 80,
      });

      const { result } = renderHook(() => useCart(), { wrapper });

      //Vai atualizar o contexto com o produto adicionado ao carrinho
      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });
      });

      expect(result.current.totalDiscount).toBe(20);
    });
  });

  describe("Total", () => {
    it("deve calcular o total subtraindo o desconto do subtotal", () => {
      const product = makeProductWithDiscount({
        id: "produto-1",
        basePrice: new Decimal(100),
        productWithDiscount: 80,
      });

      const { result } = renderHook(() => useCart(), { wrapper });

      //Vai atualizar o contexto com o produto adicionado ao carrinho
      act(() => {
        result.current.addProduct({
          ...product,
          quantity: 1,
        });
      });

      expect(result.current.total).toBe(80);
    });
  });
});
