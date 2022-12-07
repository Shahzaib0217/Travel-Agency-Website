const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Contact = sequelize.define('Contact', {
    contactID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    userEmail: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true

module.exports = Contact