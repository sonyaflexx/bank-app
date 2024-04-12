const Error = require('../errors/Error')
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
        const {card_number, password} = req.query
        const user = await User.findOne({ where: {card_number} })
        if (!user) {
            return next(Error.Internal("Неверные данные пользователя!"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password_hash)
        if (!comparePassword) {
            return next(Error.Internal("Неверные данные пользователя!"))
        }
        const token = generateToken(user.card_number, user.firstname, user.lastname)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateToken(req.user.card_number, req.user.firstname, req.user.lastname)
        return res.json({token})
    }

    async getBalance(req, res) {

    }

    async getHistory(req, res) {

    }
}

module.exports = new UserController()