class Product {
    constructor() {
        this._id = ""
        this._name = ""
        this._description = ""
        this._image = ""
        this._category = ""
        this._price = 0
    }

    set id(id) {
        if (typeof id == 'string') {
            this._id = id
            return
        }
        throw new Error('id debe ser un string')
    }
    get id() {
        return this._id
    }

    set name(name) {
        if (typeof name == 'string') {
            this._name = name
            return
        }
        throw new Error('name debe ser un string')
    }
    get name() {
        return this._name
    }

    set description(description) {
        if (typeof description == 'string') {
            this._description = description
            return
        }
        throw new Error('description debe ser un string')
    }
    get description() {
        return this._description
    }

    set image(image) {
        if (typeof image == 'string') {
            this._image = image
            return
        }
        throw new Error('image debe ser un string')
    }
    get image() {
        return this._image
    }

    set category(category) {
        if (typeof category == 'string') {
            this._category = category
            return
        }
        throw new Error('category debe ser un string')
    }
    get category() {
        return this._category
    }

    set price(price) {
        if (typeof price == 'number') {
            this._price = price
            return
        }
        throw new Error('price debe ser un Number')
    }
    get price() {
        return this._price;
    }
}
