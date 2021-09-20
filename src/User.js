class User {
    constructor() {
        this._id = ''
        this._name = ''
        this._email = ''
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

    set email(email) {
        if (typeof email == 'string') {
            this._email = email
            return
        }
        throw new Error('email debe ser un string')
    }
    get email() {
        return this._email
    }
}