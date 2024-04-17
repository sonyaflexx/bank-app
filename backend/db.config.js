require('dotenv').config();
const pg = require('pg');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectModule: pg
});

module.exports = sequelize;