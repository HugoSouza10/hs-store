"use client";
import { useCart } from "@/context/CartContext";
import { ProductWithDiscount } from "@/app/helpers/calculatePricing";
import { toast } from "sonner";

export const AddToCartButton = ({
  product,
}: {
  product: ProductWithDiscount;
}) => {
  console.log(product);
  const { addProduct } = useCart();
  // Criar um CartProduct com a quantidade 1, preservando o productWithDiscount existente

  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product, // Espalha todas as propriedades do produto
      quantity: 1, // Define a quantidade como 1
    };
    addProduct(productWithQuantity);
    toast.success("Produto adicionado com sucesso!");
  };
  
  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-3 px-6 bg-primary mt-7 font-bold text-center rounded-xl"
    >
      Adicionar ao Carrinho
    </button>
  );
};
