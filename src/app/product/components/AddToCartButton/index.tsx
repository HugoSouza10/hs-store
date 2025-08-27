"use client";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export const AddToCartButton = ({ product }: { product: Product }) => {
  console.log(product)
  const { addProduct } = useCart();
  return (
    <button onClick={() => addProduct(product)}  className="w-full py-3 px-6 bg-primary mt-7 font-bold text-center rounded-xl">
      Adicionar ao Carrinho
    </button>
  );
};
