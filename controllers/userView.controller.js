var con = require('../config/db');
const User = require('../models/user.model')
const Tour = require('../models/tour.model')
const Comment = require('../models/comment.model')
const Reply = require('../models/reply.model')
const sequelize = require("../config/db")
const { QueryTypes } = require('sequelize');

// Display Fuction
exports.Display = async (req, res, displayFile, pquery, pview) => {
    const totalMovies = await sequelize.query("SELECT COUNT(*) FROM tour", { type: QueryTypes.SELECT });
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
exports.DisplayTour = async (req, res,) => {
    const TourID = req.params.id
    const tourData = await Tour.findAll({ where: { tourID: TourID } });
    const cmntData = await Comment.findAll({ where: { tourID: TourID } });
    const replyData = await Reply.findAll();
    res.render("user/tour", { session: req.session, data: tourData, Comment: cmntData, reply: replyData })
}

exports.AddComment = async (req, res,) => {
    const { comment } = req.body;
    const tourid = req.params.id;
    const commentObj = await Comment.create({ tourID: tourid, userName: req.session.username, userImage: req.session.userimg, commentMessage: comment });
    res.redirect(`/tour/${tourid}`)
}

exports.AddReply = async (req, res,) => {
    const { reply } = req.body;
    const tourid = req.params.tourid;
    const cmntid = req.params.cmntid;
    const replyObj = await Reply.create({ commentID: cmntid, userName: req.session.username, userImage: req.session.userimg, replyMessage: reply });
    res.redirect(`/tour/${tourid}`)
}

exports.BookTour = async (req, res,) => {
    const TourID = req.params.tourid
    // const tourData = await Tour.findAll({ where: { tourID: TourID } });
    // const cmntData = await Comment.findAll({ where: { tourID: TourID } });
    // const replyData = await Reply.findAll();
    // res.render("user/booktour", { session: req.session, data: tourData, Comment: cmntData, reply: replyData })
    res.render("user/booktour")
}

