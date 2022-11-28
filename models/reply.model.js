const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Reply = sequelize.define('Reply', {
    commentID: { type: DataTypes.INTEGER, allowNull: false },
    userName: { type: DataTypes.STRING, allowNull: false },
    userImage: { type: DataTypes.STRING, allowNull: false },
    replyMessage: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Reply === sequelize.models.Reply); // true

module.exports = Reply