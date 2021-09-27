import brandInterface from "./brandInterface";
import clothingInterface from "./clothingInterface";
import shoesInterface from "./shoesInterface";

export default interface catalogInterface {
    brandList: brandInterface[];
    shoesList: shoesInterface[];
    clothingList: clothingInterface[];

}