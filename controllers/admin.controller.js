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
    await Tour.create({
        tourName: "Murree Shugran Tour", tourDescription: "Murree Shogran Tour 3 Days 2 Nights, Murree and Shogran are, both known for their scenic beauty, lush green meadows, and most pleasant climate.",
        tourCity: "Murree Shugran", tourInclusions: "Quality Transportations with Air conditioned Gli Car with Fuel",
        tourHotels: "1.Friday Hotel Shogran 2.Hotel Mahgul Resort Changla Galli", tourPrice: 55500, tourImage: "murreeshogran3.jpg", tourBanner: "MurreeShogran3.jpg", tourDuration: 3
    });
    await Tour.create({
        tourName: "Swat Tour", tourDescription: "Swat Honeymoon 3Days Tour Package offers the best services to the newlywed couple and oldie to give a new turn in your life, especially designed by Pakistan Tour Travel. ",
        tourCity: "SWAT", tourInclusions: "Dedicated Private GLI Car with Driver & Fuel        ",
        tourHotels: "1.Eagle Nest Hotel Economy Class Malam Jabba 2.Diamond HOtel or Honeymoon HOtel Kalam", tourPrice: 55500, tourImage: "Swat3.jpg", tourBanner: "Swat3Days.jpg", tourDuration: 3
    });
    await Tour.create({
        tourName: "Swat Valley", tourDescription: "4 Day Swat Tour package is our Best Selling Swat Tour. Quality road infrastructure, robust local administration & the opening of the Swat Motorway are all ingredients of the Swat Tour.. ",
        tourCity: "Swat", tourInclusions: "Dedicated Private GLI Car with Driver & Fuel        ",
        tourHotels: "1.Diamond HOtel 2.Eagle Nest Hotel Economy Class Malam Jabba", tourPrice: 67500, tourImage: "Swat4.jpg", tourBanner: "Swat4Days.jpg", tourDuration: 4
    });
    await Tour.create({
        tourName: "Murree Hills", tourDescription: "Murree is busy all year round, and thousands of local tourists come here to spend quality time with their loved ones. The Murree Hills is only 65 km away from Islamabad. Our daily package includes high-quality transportation with drivers. Hurry up ",
        tourCity: "Murree Hills", tourInclusions: "Dedicated Private GLI Car 2015 – 2018  with Driver & FuelRoad Taxes,Driver Food,",
        tourHotels: "NONE", tourPrice: 10000, tourImage: "Murreehills1.jpg", tourBanner: "MurreeSightseeing1.jpg", tourDuration: 1
    });
    await Tour.create({
        tourName: "Murree Islamabad", tourDescription: "The Pakistan Tour and Travels offers Islamabad Bhurbhan Muzaffarabad Travel Packages. The tour plan is suitable for couples who wish to visit the world’s second-most beautiful capital with staying in the Luxurious setting of Serena",
        tourCity: "Murree Islamabad", tourInclusions: "Dedicated Private GLI Car 205 – 2017  with Driver & Fuel",
        tourHotels: "Hotel PC Bhurbhan ( 1 Nights Stay) 2.Hotel PC Muzzafferabad ( 1 Nights Stay ) 3.Serena Hotel Islamabad ( 1 Night Stay )", tourPrice: 60000, tourImage: "MurreeIslamabad4.jpg", tourBanner: "IslamabadBhurban4.jpg", tourDuration: 4
    });
    await Tour.create({
        tourName: "Hunza Tour", tourDescription: "Luxus Hunza Tour offers a unique trip to make an unforgettable stay, relaxation and rejuvenation experience in Attabad, Hunza. Inspired by the endless blue of the sky and lake, Luxus Hunza combines high-quality service beyond the standard for a truly luxurious hospitality experience.",
        tourCity: "Hunza Tour", tourInclusions: "Parado 2003 to 2005 Model with Local Driver",
        tourHotels: "Hotel PC Bhurbhan ( 1 Nights Stay) 2.Hotel PC Muzzafferabad ( 1 Nights Stay ) 3.Serena Hotel Islamabad ( 1 Night Stay )", tourPrice: 80000, tourImage: "LuxusHunza.jpg", tourBanner: "LuxusHunza4.jpg", tourDuration: 4
    });
    await Tour.create({
        tourName: "Hunza Sakardu", tourDescription: "The Karakoram Hunza Skardu Tour is mainly for foreigners who wish to see the beauty of culture and breathtaking locations. Karakoram Hunza Skardu Tour covers all the significant parts of Gilgit Baltistan, as the name mention.",
        tourCity: "Hunza, Skardu ", tourInclusions: "All kinds of transportation according to the situation.",
        tourHotels: "Ten nights in hotels, in a double room with private facilities and breakfast.", tourPrice: 150000, tourImage: "HunzaSkardu.jpg", tourBanner: "HunzaSkarduTour.jpg", tourDuration: 10
    });
    await Tour.create({
        tourName: "Hunza Darbar", tourDescription: "This Darbar Hunza 4Days Luxury tour offers Gilgit, Rakaboshi Viewpoint, Karimabad, Altit Fort, Baltit Fort, Baltit Market, Attabad Lake, and Sightseeing at Passu Cones and Khunjerab Pass.",
        tourCity: "Hunza ,Darbar, gilgit, islamabad ", tourInclusions: "By Air.",
        tourHotels: "Parado 2003 to 2005 Model with Local Driver,Islamabad to Gilgit Return Tickets,Tickets/passes for Altit  Fort  Inclusive .", tourPrice: 180000, tourImage: "HunzaDarbar.jpg", tourBanner: "HunzaDarbar4.jpg", tourDuration: 7
    });
    await Tour.create({
        tourName: "Neelam Valley", tourDescription: "Neelam valley of Azad Kashmir is mainly known for its winter holidays. Neelam Valley 3 Day 2 Nights tour package is a short Neelum valley tour for couples and families having a short time..",
        tourCity: "Neelam Valley ", tourInclusions: "Quality Dedicated Private Transportations with Air conditioned Toyota GLI Corolla.",
        tourHotels: "One Family Room in Reputed Family Hotels & Resorts.", tourPrice: 48500, tourImage: "NeelumValley1.jpg", tourBanner: "NeelumValley3.jpg", tourDuration: 3
    });
    await Tour.create({
        tourName: "Neelam Nathia Gali", tourDescription: "Neelam valley of Azad Kashmir is mainly known for its winter holidays. Neelam Valley 3 Day 2 Nights tour package is a short Neelum valley tour for couples and families having a short time..",
        tourCity: "Neelam Valley, Nathia Gali, Ayubia ", tourInclusions: "Dedicated 1300 CC Toyota Corolla GLI Car.",
        tourHotels: "3 Nights Hotel Stay.", tourPrice: 58500, tourImage: "NeelumMurree.jpg", tourBanner: "NeelumNathiagali.jpg", tourDuration: 4
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
exports.addadmin = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const image_path = req.file.originalname;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: image_path, role: 'admin' });
    console.log('User was saved in Database')
    res.redirect('/signin')
}

exports.addadmin = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const image_path = req.file.originalname;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: image_path, role: 'admin' });
    console.log('User was saved in Database')
    res.redirect('/signin')
}