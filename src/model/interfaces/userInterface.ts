import Cart from "../Cart";

export default interface userInterface {
    id: string;
    name: string;
    email: string;
    cart: Cart;
}