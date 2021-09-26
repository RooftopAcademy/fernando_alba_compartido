import homeView from "../views/homeView"

export default function homePage() {

    const divElement = document.createElement('div')
    divElement.innerHTML = homeView()

    return divElement
}
