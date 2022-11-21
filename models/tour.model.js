const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db"); //sirf aik directory peechy jana hai

const Tours = sequelize.define("tours", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departure_date: {
        type: DataTypes.DATEONLY,
    },
    return_date: {
        type: DataTypes.DATEONLY,
    },
    duration: {
        type: DataTypes.STRING,
    }
});

module.exports = Tours;


