var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const user = require("../controllers/userView.controller")
const upload = require('../config/multer')
const admin = require("../controllers/admin.controller")
const scrap = require("../controllers/webscraping");
const request = require("request");
const cheerio = require('cheerio');

/* GET home page. */
router.get('/', (req, res) => { res.render('home', { session: req.session }); });
// Login
router.get('/signin', (req, res) => { res.render('signin', { session: req.session, response: res }); });
router.post('/signin', (req, res) => { index.signin(req, res) });
router.get('/signout', (request, response) => {
    request.session.destroy();
    response.redirect("/");
});
//Forget password
router.get('/forgetPassword', (req, res) => { res.render('forgetPassword') });
router.post('/forgetPassword', index.forgetPassword);
// Reset Password
router.get('/resetPassword/:id/:token', index.getResetPassword)
router.post('/resetPassword/:id/:token', index.postResetPassword)
// Register
router.get('/signup', (req, res) => { res.render('signup') });
router.post('/signup', upload.single('image'), index.signup);
//==========  User View ============
//Displaying Tours
router.get('/tours', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour', 'tour') });
router.get('/tour/:id', user.DisplayTour);
// Comments
router.post('/AddComment/:id', user.AddComment);
router.post('/AddReply/:tourid/:cmntid', user.AddReply);
//Tour Bookings
router.get('/bookTour/:tourid', user.BookTour);
router.get('/customOrder', user.CustomTour);
router.post('/bookTour/:tourid', user.PostBookTour);
router.post('/customOrder', user.PostCustomTour); // change function
//webscraping
router.get('/moretour', scrap.display);
// User Feedback
router.get('/feedback/:userID/:tourID', user.feedback)
router.post('/feedback/:userID/:tourID', user.postfeedback)
// Admin View
router.get('/admin', (req, res) => { user.Display(req, res, 'admin/dashboard', 'Select * from tour', 'tour') });
router.get('/admin/reloadTours', admin.ReloadTour)
router.get('/admin/customOrders', (req, res) => { user.Display(req, res, 'admin/displayCustOrders', 'Select * from customorder', 'customorder') })
router.get('/admin/Orders', (req, res) => { user.Display(req, res, 'admin/displayOrders', 'SELECT * FROM `order`', '`order`') })
router.get('/admin/Feedback', (req, res) => { user.Display(req, res, 'admin/displayfeedback', 'Select * from feedback', 'feedback') })
router.get('/admin/insert', (req, res) => { res.render('admin/inputTour') })
router.get('/admin/edit')
router.get('/admin/delete')
router.post('/admin/insert')
router.post('/admin/edit')


module.exports = router;
