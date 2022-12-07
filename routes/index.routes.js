var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const user = require("../controllers/userView.controller")
const upload = require('../config/multer')
const admin = require("../controllers/admin.controller")
const scrap = require("../controllers/webscraping");
const request = require("request");
const cheerio = require('cheerio');
const upload1 = require('../config/multer1')
const upload2 = require('../config/multer2')
const chat = require('../chat/server')
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
//filteration
router.get('/3DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=3', 'tour') });
router.get('/5DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=5', 'tour') });
router.get('/7DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=7', 'tour') });
//search
router.post('/search', user.search)
// Comments
router.post('/AddComment/:id', user.AddComment);
router.post('/AddReply/:tourid/:cmntid', user.AddReply);
// chat
router.get('/chat', chat.startchat)
//Tour Bookings
router.get('/bookTour/:tourid', user.BookTour);
router.get('/customOrder', user.CustomTour);
router.post('/bookTour/:tourid', user.PostBookTour);
router.post('/customOrder', user.PostCustomTour); // change function
// contact us
router.get('/contactUs', (req, res) => { res.render('user/contactUs') })
router.post('/contactUs', user.sendContact)
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
router.get('/admin/edit/:tourid', admin.getUpdate)
router.get('/admin/delete/:tourid', admin.deleteTour)
router.post('/admin/insert', upload1.single('CardImage'), upload2.single('BannerImage'), admin.insertTour)
router.post('/admin/edit/:tourid', admin.postUpdate)

module.exports = router;
