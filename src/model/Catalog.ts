import brandInterface from "./interfaces/brandInterface";
import catalogInterface from "./interfaces/catalogInterface";
import clothingInterface from "./interfaces/clothingInterface";
import shoesInterface from "./interfaces/shoesInterface";

export default class Catalog implements catalogInterface{
    brandList: brandInterface[] = [];
    shoesList: shoesInterface[] = [];
    clothingList: clothingInterface[] = [];

    addBrand(brand: brandInterface) {
        this.brandList.push(brand)
    }

    getBrandList(): brandInterface[] {
        return this.brandList
    }

    addShoes(shoes: shoesInterface) {
        this.shoesList.push(shoes)
    }

    getShoesList(): shoesInterface[] {
        return this.shoesList
    }

    addClothing(clothing: clothingInterface) {
        this.clothingList.push(clothing)
    }

    getClothingList(): clothingInterface[] {
        return this.clothingList
    }

}
