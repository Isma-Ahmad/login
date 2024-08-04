const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const User = require('./user')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
};

module.exports = db;
