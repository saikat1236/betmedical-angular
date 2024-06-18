import { Category } from "./category.model";

export class Product {
    id: number;
    name: string;
    categories: Category[];
    slug: string;
    product_logo: string;
    front_image: string;
    images: [];
    video_url?: string;
    short_desc?: string;
    description?: string;
    specification?: string;
}
