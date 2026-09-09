"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { ProductWithDiscount } from "../app/helpers/calculatePricing";

//Um CartProduct tem tudo que ProductWithDiscount tem, mais quantity.
export interface CartProduct extends ProductWithDiscount {
  quantity: number;
}

//Quem usar useCart() vai poder acessar essas coisas.
interface CartContextData {
  products: CartProduct[];
  initialProducts?: CartProduct[];
  subtotal: number;
  totalDiscount: number;
  total: number;
  addProduct: (product: CartProduct) => void;
  incrementProductQuantity: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
  clearCart: () => void;
}

//React, crie um Context que terá esse formato
const CartContext = createContext<CartContextData>({
  products: [],
  initialProducts: [],
  subtotal: 0,
  totalDiscount: 0,
  total: 0,
  addProduct: () => {},
  incrementProductQuantity: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

//Interface criada para receber props recebibas
interface CartProviderProps {
  children: ReactNode;
  initialProducts?: CartProduct[];
}

// Local onde vai ser exportado e atualizado disponibilizando assim para todos os componentes.
export const CartProvider = ({ children, initialProducts = [] }: CartProviderProps) => {
  //O estado do meu carrinho começa com initialProducts
  const [products, setProducts] = useState<CartProduct[]>(initialProducts);

  const subtotal = useMemo(() => {
    return products.reduce(
      (sum, product) => sum + Number(product.basePrice) * product.quantity,
      0,
    );
  }, [products]);

  const totalDiscount = useMemo(() => {
    return products.reduce(
      (sum, product) =>
        sum +
        Math.max(0, Number(product.basePrice) - product.productWithDiscount) *
          product.quantity,
      0,
    );
  }, [products]);

  const total = useMemo(() => {
    return subtotal - totalDiscount;
  }, [products, totalDiscount]);

  //Função especifica para adicionar um único produto
  const addProduct = (product: CartProduct) => {
    if (product.quantity <= 0) {
      return;
    }
    setProducts((prev) => {
      const existingProductIndex = prev.findIndex((p) => p.id === product.id);
      if (existingProductIndex !== -1) {
        incrementProductQuantity(product.id, 1); // Incrementa a quantidade em 1
      } else {
        // Produto não existe, adiciona com a quantidade 1
        return [...prev, { ...product, quantity: 1 }];
      }
      return prev; // Retorna o carrinho sem mudanças (a quantidade foi ajustada na função de incremento)
    });
  };
  //Função especifica para aumentar a quantidade de produto
  const incrementProductQuantity = (id: string, quantity: number) => {
    setProducts((products) =>
      products
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + quantity } : p,
        )
        .filter((p) => p.quantity > 0),
    );
  };
  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };
  const clearCart = () => {
    setProducts([]);
  };

  //Retornar o conteúdo do provider atualizado
  return (
    <CartContext.Provider
      value={{
        products,
        subtotal,
        totalDiscount,
        total,
        addProduct,
        incrementProductQuantity,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Hook do context do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
