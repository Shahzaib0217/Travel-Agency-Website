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

exports.insertTour = async (req, res) => {
    const { name, Tourcity, TourDesc, TourIncl, Hotels, Duration, price } = req.body;
    const CardImage = req.file1.originalname;
    const BannerImage = req.file2.originalname;
    await Tour.create({
        tourName: name, tourDescription: TourDesc, tourCity: Tourcity, tourInclusions: TourIncl,
        tourHotels: Hotels, tourPrice: price, tourImage: CardImage, tourBanner: BannerImage, tourDuration: Duration
    });
    res.redirect('/admin')
}
exports.getUpdate = async (req, res) => {
    const TourID = req.params.tourid
    const tour_dataa = await Tour.findAll({ where: { tourID: TourID } });
    console.log(tour_dataa[0])
    res.render('admin/editTour', { tour_data: tour_dataa[0] })
}
exports.postUpdate = async (req, res) => {
    const { name, Tourcity, TourDesc, TourIncl, Hotels, Duration, price } = req.body;
    const CardImage = req.file1.originalname;
    const BannerImage = req.file2.originalname;
    await Tour.create({
        tourName: name, tourDescription: TourDesc, tourCity: Tourcity, tourInclusions: TourIncl,
        tourHotels: Hotels, tourPrice: price, tourImage: CardImage, tourBanner: BannerImage, tourDuration: Duration
    });
    res.redirect('/admin')
}

exports.deleteTour = async (req, res) => {
    const TourID = req.params.tourid
    await Tour.destroy({ where: { tourID: TourID } });
    res.redirect('/admin')
}