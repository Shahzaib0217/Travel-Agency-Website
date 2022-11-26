const sequelize = require("../config/db")
// Model Imports
// const user = require('../models/user.model')
const tour = require('../models/tour.model')

tour.sync();
// sequelize.sync(); //{ force: true }
console.log("All models were synchronized successfully.");
