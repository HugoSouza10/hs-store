"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "./button"
import { useCart } from "@/context/CartContext";

interface QuantitySelectorProps {
  id: string
  quantity: number
}

export const QuantitySelector = ({id, quantity}: QuantitySelectorProps) => {
    console.log(quantity)
    /*
        1- Id, quantidade OK
        2- Precisamos criar a função de aumentar a quantidade e diminuir.
        3- Chamar a função de aumentar quantidade do contexto do carrinho e 
        enviar o id e quantidade necessária.

        funcionamento: O componente já recebe o id e quantidade por produto,
        sendo assim, só enviar esses dados para função incrementProductQuantity
    */

    const { incrementProductQuantity  } = useCart();

    return (
        <div className="flex items-center">
             <Button onClick={() => incrementProductQuantity(id, -1)} variant="outline" size="icon" className="size-8 border-[#1A1A1A]">
                <ChevronLeftIcon />
            </Button>
            <div>{quantity}</div>
             <Button onClick={() => incrementProductQuantity(id, 1)} variant="outline" size="icon" className="size-8 border-[#1A1A1A] rounded-sm">
                <ChevronRightIcon />
            </Button>
        </div>
    )
}