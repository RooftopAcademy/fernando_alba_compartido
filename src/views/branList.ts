import brandInterface from "../model/interfaces/brandInterface";
import brandItemView from "./brandItemView";

export default function brandList(brands: brandInterface[]) {
    return brands.map(brand => brandItemView(brand))
}