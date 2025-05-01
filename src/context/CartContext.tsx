'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';

//Criando os types do meu context
interface Product {
    id: string;
    description: string;
    basePrice: number;           // Ex: 882.57
    productWithDiscount: number; // Ex: 759.00
    quantity: number;
}

interface CartContextData  {
    products: Product[];
    subtotal: Number;
    discount: Number;
    total: Number;
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    clearCart: () => void;
}

//Criando o contexto com dados iniciais.
const CartContext = createContext<CartContextData>({
    products: [],
    subtotal: 0,
    discount: 0,
    total: 0,
    addProduct: () => {},
    removeProduct: () => {},
    clearCart: () => {},
});

// Local onde vai ser exportado e atualizado disponibilizando assim para todos os componentes.
export const CartProvider = ({children}: {children: ReactNode}) => {
    const  [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            description: 'Combo Sushi Especial',
            basePrice: 882.57,
            productWithDiscount: 759.0,
            quantity: 1,
          },
          {
            id: '2',
            description: 'Temaki de Salmão',
            basePrice: 35.9,
            productWithDiscount: 29.9,
            quantity: 2,
          },
          {
            id: '3',
            description: 'Uramaki Philadelphia',
            basePrice: 42.0,
            productWithDiscount: 39.0,
            quantity: 1,
          },
    ]);

    const subtotal = useMemo(()=> {
        return products.reduce((sum, product) => sum + product.basePrice * product.quantity, 0);
    }, [products]);

    const total = useMemo(() => {
        return products.reduce((sum, product) => sum + product.productWithDiscount * product.quantity, 0);
    }, [products]);

    const discount = useMemo(() => subtotal - total, [subtotal, total]);

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
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
            discount,
            total,
            addProduct,
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


