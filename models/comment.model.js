const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Comment = sequelize.define('Comment', {
    commentID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    tourID: { type: DataTypes.INTEGER, allowNull: false },
    userName: { type: DataTypes.STRING, allowNull: false },
    userImage: { type: DataTypes.STRING, allowNull: false },
    commentMessage: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Comment === sequelize.models.Comment); // true

module.exports = Comment