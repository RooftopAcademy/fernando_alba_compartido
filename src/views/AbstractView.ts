import App from "../App"

export default class AbstractView {
    app: App
    params: string[] | undefined

    constructor(app: App, params: string[] | undefined) {
        this.app = app
        this.params = params
    }

    setTitle(title: string) {
        document.title = title
    }

    getHTMLElement(): HTMLElement {
        return document.createElement('div')
    }
}