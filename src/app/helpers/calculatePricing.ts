import type { ProductModel } from "@/generated/prisma/models";

export interface ProductWithDiscount extends ProductModel {
    productWithDiscount: number;
}

export const calculateDiscountedPrice = (product: ProductModel): ProductWithDiscount => {
    const discountAmount =  (Number(product.basePrice) * Number(product.discountPercentage)) / 100;

    const discountedPrice = Number(product.basePrice) - discountAmount;

    return {
        ...product,
        productWithDiscount: Number(discountedPrice.toFixed(2)) // Arredonda para 2 casas decimais
    }
};