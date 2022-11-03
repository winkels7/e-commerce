module.exports = (sequelize, DataTypes) => {
    sequelize.define('Usuario', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    })
}