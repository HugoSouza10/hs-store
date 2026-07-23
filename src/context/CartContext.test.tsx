import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import { CartProvider, useCart } from "./CartContext";
import { makeProductWithDiscount } from "@/test/factories/makeProductWithDiscount";

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

const product = makeProductWithDiscount({
  id: "produto-1",
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
      const keyboard = makeProductWithDiscount({
        id: "produto-1",
        name: "Teclado",
      });

      const mouse = makeProductWithDiscount({
        id: "produto-2",
        name: "Mouse",
      });

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
});
