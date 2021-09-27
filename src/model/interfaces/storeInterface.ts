import Catalog from "../Catalog";
import User from "../User";

export default interface storeInterface {
    user: User;
    catalog: Catalog;
}