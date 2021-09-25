import "./css/app.css"
import "./css/elements.css"
import "./css/index.css"
import "./css/product-list.css"

import navbarView from "./views/navbarView"

let header = document.getElementById("js-header")!
header.innerHTML += navbarView()



