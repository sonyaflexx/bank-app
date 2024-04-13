const { Type, Transaction } = require('../models/models')
const Error = require('../errors/Error')
const sequelize = require('../db.config')
const { User } = require('../models/models')

class TransactionController {
    async createDeposit(req, res) {
        const t = await sequelize.transaction()

        try {
            const { receiver_id, amount } = req.body;
    
            if (!receiver_id || !amount) {
                return res.status(400).json({ error: 'Недостаточно данных для создания транзакции' });
            }

            const receiver = await User.findByPk(receiver_id, { transaction: t });

            if (!receiver) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }

            receiver.balance += amount;
            await receiver.save({transaction: t});
    
            await Transaction.create({
                transaction_type: 'пополнение',
                amount: amount,
                receiver_id: receiver_id,
            }, {transaction: t});

            await t.commit();
    
            return res.status(201).json({success: true});
        } catch (error) {
            await t.rollback();

            return res.status(500).json({ success: false, error: error.message  });
        }
    }
    
    
    async getAllTransactions(req, res) {
        const transaction = await Transaction.findAll()
        return res.json(transaction)
    }
}

module.exports = new TransactionController()