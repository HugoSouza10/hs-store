import { Decimal } from "@prisma/client/runtime/client";

export interface Product {
    id: string;
    name: string;
    description: string;
    basePrice: Decimal;
    discountPercentage: number;
    imageUrls: string[];
    categoryId: string;
    slug: string;
}