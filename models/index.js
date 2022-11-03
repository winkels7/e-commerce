const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')
const config = require('../config/')

const Ingresso = require('./ingresso')

const ingresso = Ingresso(sequelize, Sequelize.DataTypes)

const db = {
    ingresso,
    sequelize
}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.password
)



module.exports = db