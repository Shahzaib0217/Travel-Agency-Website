var sequelize = require("../db");
var db = require('../models/tours');
const { post } = require("../routes/admin.routes");
const TOURS = db.tour;

exports.addtour = async (req, res) => {
    const id = req.body.tid;
    const name = req.body.name;
    const days = req.body.day;
    const price = req.body.price;
    const rating = req.body.rate;
    const tstart = req.body.sdate;
    const rdate = req.body.ddate;
    const data = await db.create({ Tour_Id: id, Name_Tour: name, Days: days, Price: price, Ratings: rating, Start_date: tstart, Return_date: rdate });
    console.log("data has been add");
    res.redirect("/");
}
exports.edittour = async (req, res) => {
    const id = req.params.Tour_Id;

    const data = await db.findAll({
        where: {
            Tour_Id: id
        }
    });
    res.render("updatetour", { userdata: data[0] });
    console.log("data need to updated been add");
    res.redirect("/");


}
//update tour data
exports.updatetour = async (req, res) => {
    const id = req.params.Tour_Id;
    const name = req.body.name;
    const days = req.body.day;
    const price = req.body.price;
    const rating = req.body.rate;
    const tstart = req.body.sdate;
    const rdate = req.body.ddate;
    await db.update({ Name_Tour: name, Days: days, Price: price, Ratings: rating, Start_date: tstart, Return_date: rdate }, { where: { Tour_Id: id } });
    console.log("data updated has been add");
    res.redirect("/");
}
//delete tour data
exports.deletetour = (req, res) => {
    const id = req.params.Tour_Id;

    const data = db.destroy({
        where: {
            Tour_Id: id
        }
    });

    console.log("data has been deleted");
    res.send("deleted done");
}




