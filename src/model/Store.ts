import BrandFactory from "./factories/BrandFactory";
import Catalog from "./Catalog";
import storeInterface from "./interfaces/storeInterface";
import User from "./User";

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
            this.catalog.addBrand(BrandFactory.create(data))
            })
        
    }
}