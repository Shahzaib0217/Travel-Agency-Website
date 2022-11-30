var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const user = require("../controllers/userView.controller")
const upload = require('../config/multer')
//const admin = require("../controllers/admin.controller")
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
router.get('/tours', (req, res) => { user.Display(req, res, 'user/Alltours', 'Select * from tour') });
router.get('/tour/:id', user.DisplayTour);
// Comments
router.post('/AddComment/:id', user.AddComment);
router.post('/AddReply/:tourid/:cmntid', user.AddReply);
//Tour Bookings
router.get('/bookTour/:tourid', user.BookTour);
router.get('/customOrder', user.CustomTour);
router.post('/bookTour/:tourid', user.PostBookTour);
router.post('/customOrder', user.PostCustomTour); // change function
// User Feedback
router.get('/feedback/:userID/:tourID', user.feedback)
router.post('/feedback/:userID/:tourID', user.postfeedback)
// Admin View
router.get('/admin', (req, res) => { user.Display(req, res, 'admin/dashboard', 'Select * from tour') });
router.get('/admin/insert')
router.get('/admin/edit')
router.get('/admin/delete')
//router.get('/admin/reloadTours', admin.ReloadTour)
router.get('/admin/customOrders')
router.get('/admin/Orders')
router.get('/admin/Feedback')

module.exports = router;
