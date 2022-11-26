var con = require('../config/db');
const User = require('../models/user.model')
const Tour = require('../models/tour.model')
const sequelize = require("../config/db")
const { QueryTypes } = require('sequelize');

// Display Tours
exports.Display = async (req, res, displayFile, pquery, pview) => {
    const totalMovies = await sequelize.query("SELECT COUNT(*) FROM tour", { type: QueryTypes.SELECT });
    let movieCount = totalMovies[0]["COUNT(*)"];
    let page = req.query.page ? req.query.page : 1;
    let moviesPerPage = req.query.moviesPerPage ? req.query.moviesPerPage : 6;  // ?
    let startLimit = (page - 1) * moviesPerPage; // 2 minus 1 * 4
    let totalPages = Math.ceil(movieCount / moviesPerPage);

    const user_data = await sequelize.query(`${pquery} LIMIT ${startLimit}, ${moviesPerPage}`, { type: QueryTypes.SELECT });
    res.render(displayFile, {
        data: user_data,
        session: req.session,
        movies: user_data,
        title: "Movies",
        movieCount,
        page,
        totalPages,
        moviesPerPage,
        view: pview,
    })
}