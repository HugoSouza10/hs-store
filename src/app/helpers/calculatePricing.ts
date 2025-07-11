import { Product } from "@/types/product";

export interface ProductWithDiscount extends Product {
    productWithDiscount: number;
}

export const calculateDiscountedPrice = (product: Product): ProductWithDiscount => {
    const discountAmount =  (product.basePrice * product.discountPercentage) / 100;

    const discountedPrice = product.basePrice - discountAmount;

    return {
        ...product,
        productWithDiscount: Number(discountedPrice.toFixed(2)) // Arredonda para 2 casas decimais
    }
};