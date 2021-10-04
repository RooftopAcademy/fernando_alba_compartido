import brandCardComponent from "../components/brandCardComponent";
import brandInterface from "../model/interfaces/brandInterface";

export default function brandList(brands: brandInterface[]): string[] {
    return brands.map(brand => brandCardComponent(brand))
}