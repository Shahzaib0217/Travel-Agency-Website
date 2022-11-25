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

//admin view
//input for admin new admin added
router.get("/addadmin", (req, res) => { res.render('addadmin') });
router.post("/addadmin", (req, res) => { admin.admininput(req, res) });
// //delete for admin
router.get('/deleteadmin/:id', (req, res) => { admin.deleteadmin(res, resp) });
// //search 
router.post('/search/:id', (req, res) => { admin.adminsearch(req, res) });
// //update 
router.get('/updateadmin/:id', (req, res) => { admin.editadmin(req, res) });
router.post('/updateadmin/:id', (req, res) => { users.updateadmin(req, res) });
module.exports = router;