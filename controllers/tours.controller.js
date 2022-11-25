var sequelize = require("../db");
var db = require('../models/tours');
const { post } = require("../routes/tour.router");
const TOURS = db.tour;

exports.addtour = async (req, res) => {
    const id = req.body.tid;
    const name = req.body.name;
    const days = req.body.day;
    const price = req.body.price;
    const rating = req.body.rate;
    const tstart = req.body.sdate;
    const rdate = req.body.ddate;
    // const { id, name, days, price, rating, tstart, rdate } = req.body;
    const data = await db.create({ Tour_Id: id, Name_Tour: name, Days: days, Price: price, Ratings: rating, Start_date: tstart, Return_date: rdate });
    console.log("data has been add");
    res.redirect("/");
}
