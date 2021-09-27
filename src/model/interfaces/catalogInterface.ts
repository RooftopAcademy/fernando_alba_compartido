import brandInterface from "./brandInterface";
import clothingInterface from "./clothingInterface";
import productInterface from "./productInterface";
import shoesInterface from "./shoesInterface";

export default interface catalogInterface {
    brandList: brandInterface[];
    productList: productInterface[];

}