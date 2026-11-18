interface Product {
    id: number;
    name: string;
    description?: string;
    price?: number;
    category: string;
    imageUrl: string;
    variants: ProductVariant[];
}
