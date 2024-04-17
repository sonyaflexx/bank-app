require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://default:DMBRjJS7KL1Z@ep-wispy-hall-a46mq5hr-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
  dialect: 'postgres'
});

module.exports = sequelize;