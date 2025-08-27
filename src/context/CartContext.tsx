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
    const  [products, setProducts] = useState<CartProduct[]>([]);

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
        setProducts((prev) => {
            const existingProductIndex = prev.findIndex((p) => p.id === product.id);
            if(existingProductIndex !== -1) {
                incrementProductQuantity(product.id, 1); // Incrementa a quantidade em 1
            }else {
                 // Produto não existe, adiciona com a quantidade 1
                 return [...prev, { ...product, quantity: 1 }];
            }
            return prev; // Retorna o carrinho sem mudanças (a quantidade foi ajustada na função de incremento)
        });
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


