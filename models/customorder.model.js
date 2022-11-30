const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const CustomOrder = sequelize.define('CustomOrder', {
    orderID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    tourName: { type: DataTypes.STRING, allowNull: false },
    tourDesc: { type: DataTypes.STRING, allowNull: false },
    tourInclusions: { type: DataTypes.STRING, allowNull: false },
    tourHotels: { type: DataTypes.STRING, allowNull: false },
    tourCity: { type: DataTypes.STRING, allowNull: false },
    tourPrice: { type: DataTypes.INTEGER, allowNull: false },
    tourDuration: { type: DataTypes.INTEGER, allowNull: false },
    tourDeptDate: { type: DataTypes.DATEONLY, allowNull: false },
    totalPersons: { type: DataTypes.INTEGER, allowNull: false },
    customerAddress: { type: DataTypes.STRING, allowNull: false },
    //userid missing
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(CustomOrder === sequelize.models.CustomOrder); // true

module.exports = CustomOrder