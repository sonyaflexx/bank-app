const { Type, Transaction } = require('../models/models')
const Error = require('../errors/Error')

class TransactionController {
    async createTransaction(req, res, next) {
        try {
            const {transaction_type, service_type, amount} = req.body
            const transaction = await Transaction.create({transaction_type, service_type, amount })
            return res.json(transaction)
        } catch (e) {
            return next(Error.BadRequest("Неверный запрос!"))
        }
    }
    
    async getAllTransactions(req, res) {
        const transaction = await Transaction.findAll()
        return res.json(transaction)
    }
}

module.exports = new TransactionController()