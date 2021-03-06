import BrandFactory from "./factories/BrandFactory";
import Catalog from "./Catalog";
import storeInterface from "./interfaces/storeInterface";
import User from "./User";
import ProductFactory from "./factories/ProductFactory";

export default class Store implements storeInterface {
    user!: User;
    catalog: Catalog = new Catalog

    setUser(user: User) {
        this.user = user
    }

    getUser(): User {
        return this.user
    }

    getCatalog(): Catalog {
        return this.catalog
    }

    fetchBrands() {

        this.getCatalog().brandList = []
        
        let data = [
            {id:'01', image: 'https://cartzilla.createx.studio/img/shop/brands/01.png', name: 'Adidas'},
            {id:'02', image: 'https://cartzilla.createx.studio/img/shop/brands/02.png', name: 'Puma'},
            {id:'03', image: 'https://cartzilla.createx.studio/img/shop/brands/03.png', name: 'Tommy Hilfiger'},
            {id:'04', image: 'https://cartzilla.createx.studio/img/shop/brands/04.png', name: 'Columbia'},
            {id:'05', image: 'https://cartzilla.createx.studio/img/shop/brands/05.png', name: 'Nike'},
            {id:'06', image: 'https://cartzilla.createx.studio/img/shop/brands/06.png', name: 'Hermes'},
            {id:'07', image: 'https://cartzilla.createx.studio/img/shop/brands/07.png', name: 'Brooks'},
            {id:'08', image: 'https://cartzilla.createx.studio/img/shop/brands/08.png', name: 'American Eagle'},
            {id:'09', image: 'https://cartzilla.createx.studio/img/shop/brands/09.png', name: 'New Balance'}
        ]

        data.forEach(item => {
            this.catalog.addBrand(BrandFactory.create(item))
            })
        
    }

    fetchProducts() {

        this.getCatalog().productList = []
        
        let data = [
            {id:'01', image: 'https://cartzilla.createx.studio/img/shop/catalog/01.jpg', name: 'Women Colorblock Sneakers', description: '', category: 'Sneakers & Keds', price: 154.00},
            {id:'02', image: 'https://cartzilla.createx.studio/img/shop/catalog/02.jpg', name: 'Cotton Lace Blouse', description: '', category: 'Women`s T-shirt', price: 28.50},
            {id:'03', image: 'https://cartzilla.createx.studio/img/shop/catalog/03.jpg', name: 'Mom High Waist Shorts', description: '', category: 'Women`s Shorts', price: 39.50},
            {id:'04', image: 'https://cartzilla.createx.studio/img/shop/catalog/04.jpg', name: 'Women Sports Jacket', description: '', category: 'Sportwear', price: 68.40},
            {id:'05', image: 'https://cartzilla.createx.studio/img/shop/catalog/05.jpg', name: 'Polarized Sunglasses', description: '', category: 'Mens`s Sunglasses', price: 50.30}
        ]


        data.forEach(item => {
            this.catalog.addProduct(ProductFactory.create(item))
            })
        
    }
}