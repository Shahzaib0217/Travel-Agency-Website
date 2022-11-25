var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const admin = require("../controllers/admin.controller")
const controller = require("../controllers/tours.controller");

/* GET home page. */
router.get('/', function (req, res) { res.render('home', { session: req.session }); });
// Login
router.get('/signin', (req, res) => { res.render('signin', { session: req.session }); });
router.post('/signin', (req, res) => { index.signin(req, res) });
router.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect("/");
});
// Register
router.get('/signup', (req, res) => { res.render('signup') });
router.post('/signup', (req, res) => { index.signup(req, res) });
// User View

// Admin View

//input for admin new admin added
// router.get('/admininput', (req, res) => { res.render('/home') });
// router.post('/admininput', (req, res) => { admin.admininput(req, res) });
// //delete for admin
// router.get('/delete/:id', (req, res) => { admin.deleteadmin(res, resp) });
// //search 
// router.post('/search/:id', (req, res) => { admin.adminsearch(req, res) });
// //update 
// router.get('/update/:id', (req, res) => { admin.update(req, res) });
// router.post('/update/:id', (req, res) => { users.updated(req, res) });

// Tour view
router.get("/addtour", (req, res) => { res.render("addtour"); });
router.post("/addtour", (req, res) => controller.addtour(req, res));

module.exports = router;

