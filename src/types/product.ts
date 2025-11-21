export interface Product {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    discountPercentage: number;
    imageUrls: string[];
    categoryId: string;
    categorySlug: string;
    slug: string;
    productWithDiscount?: number;
}