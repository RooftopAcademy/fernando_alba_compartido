import Cart from "../Cart";
import cartInterface from "./cartInterface";

export default interface userInterface {
    id: string;
    name: string;
    email: string;
    cart: Cart;
}