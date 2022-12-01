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
        tourName: "Bhurbhan Tour", tourDescription: "PC Bhurbhan Couple Tour is all you need when planning your honeymoon. Proposing a honeymoon trip in Malika e Kohsar is undoubtedly exciting for the couple from Karachi and Lahore. All you need is a peaceful environment, a lavish stay, and pleasant weather far away from the hustle-bustle of the city.Moreover, a 3-day and 2-night PC Burbhan Couple Tour at PC Bhurban Muzaffarabad covers all the significant parts of Murree. Do shopping at Mall Road. Explore the beautiful Murree Mountain Resort, along with the charming Muzaffarabad area. The capital of Assad Kashmir is famous for its stunning scenery.",
        tourCity: "Bhurbhan", tourInclusions: "Dedicated Private GLI Car 2015 – 2018  with Driver & Fuel        Breakfast for Couple.        2 Nights Hotel Stay in PC Bhurbhan Murree Hotel. Road Taxes        Driver Food, Accommodation be Paid by Company. 2 Tickets for Riding Cable Car in Patriata Hills  Only",
        tourHotels: "PC Bhurbhan", tourPrice: 70000, tourImage: "Bhurban3.jpg", tourBanner: "Bhurban3Days.jpg", tourDuration: 3
    });
    res.redirect('/admin')
}
