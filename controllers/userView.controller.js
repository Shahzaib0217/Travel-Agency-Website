var con = require('../config/db');
const User = require('../models/user.model')
const Tour = require('../models/tour.model')
const CustomOrder = require('../models/customorder.model')
const Order = require('../models/order.model')
const Comment = require('../models/comment.model')
const Reply = require('../models/reply.model')
const Feedback = require('../models/feedback.model')
const sequelize = require("../config/db")
const { QueryTypes } = require('sequelize');
const pdf = require("../controllers/pdf.controller")

// Display Fuction
exports.Display = async (req, res, displayFile, pquery, table, pview) => {
    const totalMovies = await sequelize.query(`SELECT COUNT(*) FROM ${table} `, { type: QueryTypes.SELECT });
    let movieCount = totalMovies[0]["COUNT(*)"];
    let page = req.query.page ? req.query.page : 1;
    let moviesPerPage = req.query.moviesPerPage ? req.query.moviesPerPage : 6;  // ?
    let startLimit = (page - 1) * moviesPerPage; // 2 minus 1 * 4
    let totalPages = Math.ceil(movieCount / moviesPerPage);

    const user_data = await sequelize.query(`${pquery} LIMIT ${startLimit}, ${moviesPerPage}`, { type: QueryTypes.SELECT });
    res.render(displayFile, {
        data: user_data, session: req.session, movies: user_data, title: "Movies",
        movieCount, page, totalPages, moviesPerPage, view: pview,
    })
}

// Displaying Single Tour Page
exports.DisplayTour = async (req, res) => {
    const TourID = req.params.id
    const tourData = await Tour.findAll({ where: { tourID: TourID } });
    const cmntData = await Comment.findAll({ where: { tourID: TourID } });
    const replyData = await Reply.findAll();
    res.render("user/tour", { session: req.session, data: tourData, Comment: cmntData, reply: replyData })
}

exports.AddComment = async (req, res) => {
    const { comment } = req.body;
    const tourid = req.params.id;
    const commentObj = await Comment.create({ tourID: tourid, userName: req.session.username, userImage: req.session.userimg, commentMessage: comment });
    res.redirect(`/tour/${tourid}`)
}

exports.AddReply = async (req, res) => {
    const { reply } = req.body;
    const tourid = req.params.tourid;
    const cmntid = req.params.cmntid;
    const replyObj = await Reply.create({ commentID: cmntid, userName: req.session.username, userImage: req.session.userimg, replyMessage: reply });
    res.redirect(`/tour/${tourid}`)
}
//======================================================================
// Tour Bookings
exports.BookTour = async (req, res) => {
    const TourID = req.params.tourid
    res.render("user/booktour", { TourID: TourID })
}

exports.CustomTour = async (req, res,) => {
    res.render("user/customtour")
}
// Post
exports.PostBookTour = async (req, res) => {
    const TourID = req.params.tourid
    const { TotalPersons, tourDate, address } = req.body
    const tourData = await Tour.findAll({ where: { tourID: TourID } });
    await Order.create({ userID: req.session.userid, tourID: TourID, totalPersons: TotalPersons, tourDeptDate: tourDate, customerAddress: address });
    // sending email
    res.render("user/orderReceipt", { tourName: tourData[0].tourName, tpersons: TotalPersons, tdate: tourDate, address: address, city: tourData[0].tourCity, incl: tourData[0].tourInclusions, hotel: tourData[0].tourHotels, duration: tourData[0].tourDuration, descrip: tourData[0].tourDescription, bill: tourData[0].tourPrice }, (err, html) => { pdf.convertpdf(req, res, err, html) })
    res.redirect(`/feedback/${req.session.userid}/${TourID}`)
}

exports.PostCustomTour = async (req, res) => {
    const { TotalPersons, tourDate, address, Tourcity, TourIncl, Hotels, Duration, TourDesc } = req.body
    const price = 15000 * Duration; // sai krna hai
    // add to custom order table
    await CustomOrder.create({ userID: req.session.userid, tourName: "Custom Order", totalPersons: TotalPersons, tourDeptDate: tourDate, customerAddress: address, tourCity: Tourcity, tourInclusions: TourIncl, tourHotels: Hotels, tourDuration: Duration, tourDesc: TourDesc, tourPrice: price });
    // sending email 
    res.render("user/orderReceipt", { tourName: "Custom Order", tpersons: TotalPersons, tdate: tourDate, address: address, city: Tourcity, incl: TourIncl, hotel: Hotels, duration: Duration, descrip: TourDesc, bill: price }, (err, html) => { pdf.convertpdf(req, res, err, html) })
    res.redirect("/")
}
// User Feeback
exports.feedback = async (req, res) => {
    const { userID, tourID } = req.params
    res.render('user/feedback', { UserID: userID, TourID: tourID })
}

exports.postfeedback = async (req, res) => {
    const { review } = req.body
    const { userID, tourID } = req.params
    await Feedback.create({ tourID: tourID, userID: userID, review: review });
    res.redirect('/')
}

exports.sendContact = async (req, res) => {
    const { contact } = req.body
    // await Contact.create({ userID: req.session.userid, userEmail: session.userEmail, message: contact });
    res.redirect('/')
}

exports.search = async (req, res) => {
    const { search } = req.body
    this.Display(req, res, 'user/Alltours', `Select * from tour WHERE tourName LIKE '%${search}%'`, 'tour')
}