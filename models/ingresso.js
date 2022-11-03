const ingresso = (sequelize, DataTypes) => {

    const Ingresso = sequelize.define('Ingresso', {
        preço: {
            type: DataTypes.INTEGER
        },
        tipoIngresso: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'ingresso'
    })

    return Ingresso
}

module.exports = ingresso