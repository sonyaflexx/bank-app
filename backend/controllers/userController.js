const Error = require('../error/Error')
const { User } = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (card_number, firstname, lastname) => {
    return jwt.sign(
        {card_number, firstname, lastname},
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async signUp(req, res, next) {
        const {firstname, lastname, password} = req.query
        if (!firstname || !lastname || !password) {
            return next(Error.BadRequest("Некорректное имя, фамилия или пароль!"))
        }
        const passwordHash = await bcrypt.hash(password, 5)
        const user = await User.create({firstname, lastname, password_hash: passwordHash})
        const token = generateToken(user.card_number, user.firstname, user.lastname)
        return res.json({token})
    }

    async signIn(req, res, next) {
        const {cardNumber, password} = req.query
        const user = await User.findOne({ where: {card_number: cardNumber} })
        if (!user ) {
            return next(Error.Internal("Неверные данные пользователя!"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password_hash)
        if (!comparePassword) {
            return next(Error.Internal("Неверные данные пользователя!"))
        }
        const token = generateToken(user.card_number, user.firstname, user.lastname)
        return res.json({token})
    }

    async check(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(Error.BadRequest('неет'))
        }
        res.json(id)
    }

    async getBalance(req, res) {

    }

    async getHistory(req, res) {

    }
}

module.exports = new UserController()