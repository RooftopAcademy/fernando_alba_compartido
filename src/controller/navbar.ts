import App from "../App";

export default function setNavbarNavigationListener(app: App) {
    Array.from(document.getElementsByClassName('ts-route')).forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault()
            console.log((e.target as HTMLElement).getAttribute("data-route"));
            app.navigate((e.target as HTMLElement).getAttribute("data-route"))
        })
    })
}