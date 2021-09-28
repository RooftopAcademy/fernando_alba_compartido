import productInterface from "./interfaces/productInterface";
import shoesInterface from "./interfaces/shoesInterface";

export default class Shoes implements productInterface, shoesInterface {
    id!: string;
    name!: string;
    description!: string;
    image!: string;
    price!: number;
    category!: string;
    size!: number[];

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

    getSize(): number[] {
        return this.size
    }
}