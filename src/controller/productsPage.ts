import productsView from "../views/productsView"

export default function productsPage() {

    const divElement = document.createElement('div')
    divElement.innerHTML = productsView()

    return divElement
}