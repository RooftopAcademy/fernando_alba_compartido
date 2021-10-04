import Brand from "../Brand"

export default class BrandFactory {
    static create(obj: { id: string; name: string; image: string }): Brand {
        let brand = new Brand

        brand.id = obj.id
        brand.name = obj.name
        brand.image = obj.image

        return brand
    }
}