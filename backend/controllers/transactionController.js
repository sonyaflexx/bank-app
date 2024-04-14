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

            receiver.balance = parseFloat(receiver.balance) + parseFloat(amount);
            await receiver.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Пополнение',
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
    
    async createDispense(req, res) {
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
            
            if (receiver.balance < amount) {
                return res.status(403).json({ error: 'Недостаточно средств' })
            }

            receiver.balance = parseFloat(receiver.balance) - parseFloat(amount);
            await receiver.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Снятие наличных',
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
    
    async createTransfer(req, res) {
        const t = await sequelize.transaction()

        try {
            const { sender_id, receiver_id, amount } = req.body;
    
            if ( !sender_id || !receiver_id || !amount ) {
                return res.status(400).json({ error: 'Недостаточно данных для создания транзакции' });
            }
            
            const sender = await User.findByPk(sender_id, { transaction: t });
            const receiver = await User.findByPk(receiver_id, { transaction: t });

            if (!receiver || !sender) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            
            if (sender.balance < amount) {
                return res.status(403).json({ error: 'Недостаточно средств' })
            }

            sender.balance = parseFloat(sender.balance) - parseFloat(amount);
            await sender.save({transaction: t});
            receiver.balance = parseFloat(receiver.balance) + parseFloat(amount);
            await receiver.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Перевод',
                amount: amount,
                sender_id: sender_id,
                receiver_id: receiver_id,
            }, {transaction: t});

            await t.commit();
    
            return res.status(201).json({success: true});
        } catch (error) {
            await t.rollback();

            return res.status(500).json({ success: false, error: error.message  });
        }
    }

    async createMobilePayment(req, res) {
        const t = await sequelize.transaction()

        try {
            const { sender_id, tel, amount } = req.body;
    
            if (!sender_id || !amount || !tel) {
                return res.status(400).json({ error: 'Недостаточно данных для создания транзакции' });
            }

            const sender = await User.findByPk(sender_id, { transaction: t });

            if (!sender) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            
            if (sender.balance < amount) {
                return res.status(403).json({ error: 'Недостаточно средств' })
            }

            sender.balance = parseFloat(sender.balance) - parseFloat(amount);
            await sender.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Мобильная связь',
                service_receiver_info: tel,
                amount: amount,
                sender_id: sender_id,
            }, {transaction: t});

            await t.commit();
    
            return res.status(201).json({success: true});
        } catch (error) {
            await t.rollback();

            return res.status(500).json({ success: false, error: error.message  });
        }
    }

    async createInternetPayment(req, res) {
        const t = await sequelize.transaction()

        try {
            const { sender_id, account, amount } = req.body;
    
            if (!sender_id || !amount || !account) {
                return res.status(400).json({ error: 'Недостаточно данных для создания транзакции' });
            }

            const sender = await User.findByPk(sender_id, { transaction: t });

            if (!sender) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            
            if (sender.balance < amount) {
                return res.status(403).json({ error: 'Недостаточно средств' })
            }

            sender.balance = parseFloat(sender.balance) - parseFloat(amount);
            await sender.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Домашний интернет',
                service_receiver_info: account,
                amount: amount,
                sender_id: sender_id,
            }, {transaction: t});

            await t.commit();
    
            return res.status(201).json({success: true});
        } catch (error) {
            await t.rollback();

            return res.status(500).json({ success: false, error: error.message  });
        }
    }

    async createTaxesPayment(req, res) {
        const t = await sequelize.transaction()

        try {
            const { sender_id, uin, amount } = req.body;
    
            if (!sender_id || !amount || !uin) {
                return res.status(400).json({ error: 'Недостаточно данных для создания транзакции' });
            }

            const sender = await User.findByPk(sender_id, { transaction: t });

            if (!sender) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            
            if (sender.balance < amount) {
                return res.status(403).json({ error: 'Недостаточно средств' })
            }

            sender.balance = parseFloat(sender.balance) - parseFloat(amount);
            await sender.save({transaction: t});
            
            await Transaction.create({
                transaction_type: 'Налоги',
                service_receiver_info: uin,
                amount: amount,
                sender_id: sender_id,
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