import Cart from "./Cart";
import cartInterface from "./interfaces/cartInterface";
import productInterface from "./interfaces/productInterface";
import userInterface from "./interfaces/userInterface";

export default class User implements userInterface {
    id!: string;
    name!: string;
    email!: string;
    cart: Cart = new Cart;
    favorites: productInterface[] = [];

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    addToCart(product: productInterface) {
        this.cart.add(product)
    }

    getCart(): Cart {
        return this.cart
    }

    addToFavorites(product: productInterface) {
        this.favorites.push(product)
    }

    getFavorites(): productInterface[] {
        return this.favorites
    }
    
}