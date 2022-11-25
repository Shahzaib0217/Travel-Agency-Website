var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const admin = require("../controllers/admin.controller")
const controller = require("../controllers/tours.controller");
// Tour view
//add new tour
router.get("/addtour", (req, res) => { res.render("addtour"); });
router.post("/addtour", (req, res) => controller.addtour(req, res));
//update tour
router.get("/updatetour/:Tour_Id", (req, res) => controller.edittour(req, res));
router.post("/updatetour/:Tour_Id", (req, res) => controller.updatetour(req, res));
//display all
router.get("/deletetour/:Tour_Id", (req, res) => controller.deletetour(req, res));
module.exports = router;