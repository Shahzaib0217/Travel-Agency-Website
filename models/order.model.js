const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Order = sequelize.define('Order', {
    orderID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    tourID: { type: DataTypes.INTEGER, allowNull: false },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    tourDeptDate: { type: DataTypes.DATEONLY, allowNull: false },
    totalPersons: { type: DataTypes.INTEGER, allowNull: false },
    customerAddress: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Order === sequelize.models.Order); // true

module.exports = Order