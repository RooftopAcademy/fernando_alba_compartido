import App from "../App";

export default function addToCartEventListener(divElement: HTMLDivElement, app: App) {
    Array.from(divElement.querySelectorAll(".ts-add-to-cart"))
        .forEach(button => {
            button.addEventListener('click', function(e) {
                let store = app.getStore()
                
                let productId = (e.target as HTMLElement).getAttribute('data-product-id')!
                let product = store.getCatalog().findProductById(productId)
                
                let user = store.getUser()

                if(user) {
                    store.getUser().addToCart(product)
                    console.log(store.getUser().getCart());
                } else {
                    alert('Debe iniciar sesión')
                }
                
            })
        })
}