const sequelize = require("../config/db")
// Model Imports
const User = require('../models/user.model')
const Tour = require('../models/tour.model')
const CustomOrder = require('../models/customorder.model')
const Order = require('../models/order.model')
const Comment = require('../models/comment.model')
const Reply = require('../models/reply.model')
const Feedback = require('../models/feedback.model')
const Contact = require('../models/contact.model')


Tour.sync()
CustomOrder.sync()
Order.sync()
Comment.sync()
Reply.sync()
User.sync()
Feedback.sync()
Contact.sync()

// sequelize.sync(); //{ force: true }
console.log("All models were synchronized successfully.");
