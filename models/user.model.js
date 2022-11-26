const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    userID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    userName: { type: DataTypes.STRING, allowNull: false },
    userEmail: { type: DataTypes.STRING, allowNull: false, unique: true },
    userPassword: { type: DataTypes.STRING, allowNull: false },
    userGender: { type: DataTypes.STRING, allowNull: false },
    userPhoneNumber: { type: DataTypes.STRING, allowNull: false },
    userImage: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User