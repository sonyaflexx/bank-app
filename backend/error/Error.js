class Error {
    constructor(status, message) {
        this.status = status
        this.message = message
    }

    static BadRequest(message) {
        return new Error(404, message)
    }

    static Internal(message) {
        return new Error(500, message)
    }

    static Forbidden(message) {
        return new Error(403, message)
    }
}

module.exports = Error