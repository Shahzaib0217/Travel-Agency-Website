const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Tour = sequelize.define('Tour', {
    tourID: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    tourName: { type: DataTypes.STRING, allowNull: false, unique: true },
    tourDescription: { type: DataTypes.STRING, allowNull: false },
    tourCity: { type: DataTypes.STRING, allowNull: false },
    tourInclusions: { type: DataTypes.STRING, allowNull: false },
    tourHotels: { type: DataTypes.STRING, allowNull: false },
    tourPrice: { type: DataTypes.INTEGER, allowNull: false },
    tourImage: { type: DataTypes.STRING, allowNull: false },
    tourBanner: { type: DataTypes.STRING, allowNull: false },
    tourDuration: { type: DataTypes.INTEGER, allowNull: false },
}, {
    freezeTableName: true,
    timestamps: true, // enabling time stamps
    createdAt: false, // dont need this in table
    updatedAt: 'updateTimestamp'
});
// `sequelize.define` also returns the model
console.log(Tour === sequelize.models.Tour); // true

module.exports = Tour