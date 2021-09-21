
class BrandFactory {
    static create(obj) {
        let brand = new Brand

        brand.id = obj.id
        brand.name = obj.name
        brand.image = obj.image

        return brand
    }
}