'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { ProductWithDiscount } from '../app/helpers/calculatePricing';

//Basicamente adicionar uma propriedade totalPrice no Product
export interface CartProduct extends ProductWithDiscount {
   quantity: number | 1;
}

interface CartContextData  {
    products: CartProduct[];
    subtotal: Number;
    totalDiscount: Number;
    total: Number;
    addProduct: (product: CartProduct) => void;
    incrementProductQuantity : (id: string, quantity: number) => void;
    removeProduct: (id: string) => void;
    clearCart: () => void;
}

//Criando o contexto com dados iniciais.
const CartContext = createContext<CartContextData>({
    products: [],
    subtotal: 0,
    totalDiscount: 0,
    total: 0,
    addProduct: () => {},
    incrementProductQuantity : () => {},
    removeProduct: () => {},
    clearCart: () => {},
});

// Local onde vai ser exportado e atualizado disponibilizando assim para todos os componentes.
export const CartProvider = ({children}: {children: ReactNode}) => {
    const  [products, setProducts] = useState<CartProduct[]>([
       {
            id: "1",
            name: "Combo Sushi Especial",
            description: "Delicioso combo de sushi com variedade especial.",
            basePrice: 882.57,
            productWithDiscount: 759.0,
            discountPercentage: 14,
            imageUrls: ["https://example.com/combo-sushi.jpg"],
            categoryId: "sushi",
            slug: "combo-sushi-especial",
            quantity: 1,
        },
        {
            id: "2",
            name: "Temaki de Salmão",
            description: "Temaki recheado com salmão fresco e ingredientes selecionados.",
            basePrice: 35.9,
            productWithDiscount: 29.9,
            discountPercentage: 16,
            imageUrls: ["https://example.com/temaki-salmao.jpg"],
            categoryId: "temaki",
            slug: "temaki-salmao",
            quantity: 2,
        },
        {
            id: "3",
            name: "Uramaki Philadelphia",
            description: "Uramaki recheado com salmão, cream cheese e cebolinha.",
            basePrice: 42.0,
            productWithDiscount: 39.0,
            discountPercentage: 7,
            imageUrls: ["https://example.com/uramaki-philadelphia.jpg"],
            categoryId: "uramaki",
            slug: "uramaki-philadelphia",
            quantity: 1,
        },
    ]);

    const subtotal = useMemo(()=> {
        return products.reduce((sum, product) => sum + (product.basePrice * product.quantity), 0);
    }, [products]);

    const totalDiscount = useMemo(()=> {
        return products.reduce((sum, product) => sum + (Math.max(0, (product.basePrice  -  product.productWithDiscount)) * product.quantity), 0);
    }, [products]);
    
    const total = useMemo(() => {
        return subtotal - totalDiscount;
    }, [products]);

    //Função especifica para adicionar um único produto
    const addProduct = (product: CartProduct) => {
        setProducts((prev) => [...prev, product]);
    };
    //Função especifica para aumentar a quantidade de produto
    const incrementProductQuantity  = (id: string, quantity: number) => {
      setProducts((products) =>
        products.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + quantity } : p
        ).filter((p) => p.quantity > 0)
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
            incrementProductQuantity ,
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
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};


