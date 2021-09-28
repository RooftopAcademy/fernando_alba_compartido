import clothingInterface from "./interfaces/clothingInterface";
import productInterface from "./interfaces/productInterface";

export default class Clothing implements productInterface, clothingInterface {
    id!: string;
    name!: string;
    description!: string;
    image!: string;
    price!: number;
    category!: string;
    size!: string[];

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

    getPrice() {
        return this.price
    }

    getCategory(): string {
        return this.category
    }

    getSize(): string[] {
        return this.size
    }

}