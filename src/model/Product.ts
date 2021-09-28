import productInterface from "./interfaces/productInterface";

export default class Product implements productInterface {
    id!: string;
    name!: string;
    description!: string;
    image!: string;
    price!: number;
    category!: string;

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    getImage(): string {
        return this.image
    }

    getPrice(): number {
        return this.price
    }

    getCategory(): string {
        return this.category
    }
}