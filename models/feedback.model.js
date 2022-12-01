const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Feedback = sequelize.define('Feedback', {
    feedbackID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    tourID: { type: DataTypes.INTEGER, allowNull: false },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    // ratings: { type: DataTypes.STRING, allowNull: false },
    review: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Feedback === sequelize.models.Feedback); // true

module.exports = Feedback