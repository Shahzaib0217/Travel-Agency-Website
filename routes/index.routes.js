var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")

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
router.post('/signup', index.signup);
// User View

// Admin View

module.exports = router;

