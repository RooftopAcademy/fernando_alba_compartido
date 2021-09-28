import brandInterface from "./interfaces/brandInterface"

export default class Brand implements brandInterface{
    id!: string;
    name!: string;
    image!: string;

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getImage() {
        return this.image
    }
}
