const sequelize = require("../config/db")
// Model Imports
// const user = require('../models/user.model')
// const tour = require('../models/tour.model')
const comment = require('../models/comment.model')
const reply = require('../models/reply.model')

comment.sync();
reply.sync();
// sequelize.sync(); //{ force: true }
console.log("All models were synchronized successfully.");
