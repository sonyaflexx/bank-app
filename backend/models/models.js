const sequelize = require('../db.config')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    card_number: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        defaultValue: () => Math.floor(Math.random() * 9000000000000000) + 1000000000000000,
        allowNull: false,
        unique: true
    },
    firstname: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    password_hash: {type: DataTypes.STRING},
    balance: {type: DataTypes.DECIMAL, defaultValue: 0}
})

const Transaction = sequelize.define('transaction', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    transaction_type: {type: DataTypes.STRING, allowNull: false},
    service_type: {type: DataTypes.STRING, allowNull: true},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
})

User.hasMany(Transaction, { as: 'transactions_sent', foreignKey: 'sender_id' });
User.hasMany(Transaction, { as: 'transactions_received', foreignKey: 'receiver_id' });

Transaction.belongsTo(User, { as: 'sender', foreignKey: 'sender_id' });
Transaction.belongsTo(User, { as: 'receiver', foreignKey: 'receiver_id' });

module.exports = {
    User,
    Transaction
}