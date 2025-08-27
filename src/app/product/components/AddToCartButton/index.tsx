"use client";
import { useCart } from "@/context/CartContext";
import { ProductWithDiscount } from "@/app/helpers/calculatePricing";

export const AddToCartButton = ({ product }: { product: ProductWithDiscount }) => {
  console.log(product)
  const { addProduct } = useCart();
  // Criar um CartProduct com a quantidade 1, preservando o productWithDiscount existente
  const productWithQuantity = {
    ...product,               // Espalha todas as propriedades do produto
    quantity: 1,               // Define a quantidade como 1
  };
  return (
    <button onClick={() => addProduct(productWithQuantity)}  className="w-full py-3 px-6 bg-primary mt-7 font-bold text-center rounded-xl">
      Adicionar ao Carrinho
    </button>
  );
};
