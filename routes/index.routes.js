var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const user = require("../controllers/userView.controller")
const upload = require('../config/multer')
const admin = require("../controllers/admin.controller")
const scrap = require("../controllers/webscraping");
const upload1 = require('../config/multer1')
const upload2 = require('../config/multer2')
const chat = require('../chat/server')
const {
    Auth,
    noAuth,
    adminAuth,
    userAuth,
    Verified,
    notVerified,
} = require("../middlewares/authCheck.middleware");
/* GET home page. */
router.get('/', userAuth, (req, res) => { res.render('home', { session: req.session }); });
// Login
router.get('/signin', noAuth, (req, res) => { res.render('signin', { session: req.session, response: res }); });
router.post('/signin', (req, res) => { index.signin(req, res) });
router.get('/signout', (request, response) => {
    request.session.destroy();
    response.redirect("/");
});
//Forget password
router.get('/forgetPassword', noAuth, (req, res) => { res.render('forgetPassword') });
router.post('/forgetPassword', index.forgetPassword);
// Reset Password
router.get('/resetPassword/:id/:token', noAuth, index.getResetPassword)
router.post('/resetPassword/:id/:token', index.postResetPassword)
// Register
router.get('/signup', noAuth, (req, res) => { res.render('signup') });
router.post('/signup', upload.single('image'), index.signup);
//==========  User View ============
//Displaying Tours
router.get('/tours', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour', 'tour', 'tours') });
router.get('/tour/:id', user.DisplayTour);
//filteration
router.get('/3DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=3', 'tour', '3DayTour') });
router.get('/5DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=5', 'tour', '5DayTour') });
router.get('/7DayTour', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour where tourDuration=7', 'tour', '7DayTour') });
//search
router.post('/search', user.search)
// Comments
router.post('/AddComment/:id', Auth, user.AddComment);
router.post('/AddReply/:tourid/:cmntid', Auth, user.AddReply);
// chat
router.get('/chat', [Auth, userAuth], chat.startchat)
//Tour Bookings
router.get('/bookTour/:tourid', [Auth, userAuth], user.BookTour);
router.get('/customOrder', [Auth, userAuth], user.CustomTour);
router.post('/bookTour/:tourid', user.PostBookTour);
router.post('/customOrder', user.PostCustomTour); // change function
// contact us
router.get('/contactUs', [Auth, userAuth], (req, res) => { res.render('user/contactUs') })
router.post('/contactUs', user.sendContact)
//webscraping
router.get('/moretour', [Auth, userAuth], scrap.display);
// User Feedback
router.get('/feedback/:userID/:tourID', [Auth, userAuth], user.feedback)
router.post('/feedback/:userID/:tourID', user.postfeedback)
// Admin View
router.get('/admin', [Auth, adminAuth], (req, res) => { user.Display(req, res, 'admin/dashboard', 'Select * from tour', 'tour', 'admin') });
router.get('/admin/reloadTours', [Auth, adminAuth], admin.ReloadTour)
router.get('/admin/customOrders', [Auth, adminAuth], (req, res) => { user.Display(req, res, 'admin/displayCustOrders', 'Select * from customorder', 'customorder') })
router.get('/admin/Orders', [Auth, adminAuth], (req, res) => { user.Display(req, res, 'admin/displayOrders', 'SELECT * FROM `order`', '`order`') })
router.get('/admin/Feedback', [Auth, adminAuth], (req, res) => { user.Display(req, res, 'admin/displayfeedback', 'Select * from feedback', 'feedback') })
router.get('/admin/insert', [Auth, adminAuth], (req, res) => { res.render('admin/inputTour') })
router.get('/admin/edit/:tourid', [Auth, adminAuth], admin.getUpdate)
router.get('/admin/delete/:tourid', [Auth, adminAuth], admin.deleteTour)
router.post('/admin/insert', upload1.single('CardImage'), upload2.single('BannerImage'), admin.insertTour)
router.post('/admin/edit/:tourid', admin.postUpdate)

module.exports = router;
