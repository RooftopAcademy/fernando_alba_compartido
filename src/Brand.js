class Brand {
    constructor() {
        this._id = ''
        this._name = ''
        this._image = ''
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
        throw new Error('name debe ser de tipo string')
    }
    get name() {
        return this._name
    }

    set image(image) {
        if (typeof image == 'string') {
            this._image = image
            return
        }
        throw new Error('image debe ser de tipo string')
    }
    get image() {
        return this._image
    }
}