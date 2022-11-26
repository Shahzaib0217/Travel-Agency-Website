
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db');
const tour = sequelize.define("tours", {
    Tour_Id: {
        type: DataTypes.INTEGER,
        autoNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Name_Tour: {
        type: DataTypes.STRING,
        autoNull: false,
    },

    Days: {
        type: DataTypes.INTEGER,
        autoNull: false,
    },
    Price: {
        type: DataTypes.INTEGER,
        autoNull: false,
    },
    Ratings: {
        type: DataTypes.INTEGER,
        autoNull: false,
    },
    Start_date:
    {
        type: DataTypes.DATE,
        autoNull: false,
    },
    Return_date: {
        type: DataTypes.DATE,
        autoNull: false,
    }


}, {
    //-------change table name
    //tableName: 'userdata',
    //-------updated and created false
    //timestamps: false,
    //----------change name of created or update
    //createdAt:'created_at'
    //--------
    //engine:'MYISAM'
    createdAt: false,
    updatedAt: false
});
module.exports = tour;
