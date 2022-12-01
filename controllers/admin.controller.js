var con = require('../config/db');
const User = require('../models/user.model')
const Tour = require('../models/tour.model')
const CustomOrder = require('../models/customorder.model')
const Order = require('../models/order.model')
const Comment = require('../models/comment.model')
const Reply = require('../models/reply.model')
const sequelize = require("../config/db")
const { QueryTypes } = require('sequelize');

exports.ReloadTour = async (req, res,) => {
    await Tour.create({
        tourName: "Bhurbhan Tour", tourDescription: "PC Bhurbhan Couple Tour is all you need when .",
        tourCity: "Bhurbhan", tourInclusions: "Dedicated Private GLI Car 2015 – 2018  with Driver & Fuel ",
        tourHotels: "PC Bhurbhan", tourPrice: 70000, tourImage: "Bhurban3.jpg", tourBanner: "Bhurban3Days.jpg", tourDuration: 3
    });
    res.redirect('/admin')
}