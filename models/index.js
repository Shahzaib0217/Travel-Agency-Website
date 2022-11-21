const sequelize = require("../config/db")
// Model Imports
// const user = require('../models/user.model')

sequelize.sync(); //{ force: true }
console.log("All models were synchronized successfully.");
