const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Ingresso = require('./ingresso')

const ingresso = Ingresso(sequelize, Sequelize.DataTypes)

const db = {
    ingresso,
    sequelize
}

module.exports = db