var con = require('../config/db');
const User = require('../models/user.model')
const transporter = require("../config/nodeMailer");
const jwt = require('jsonwebtoken')
require("dotenv").config();

// Function for sign in
exports.signin = async (req, res) => {

    const { email, password } = req.body;
    if (email && password) {
        const data = await User.findAll({ where: { userEmail: email } });
        if (data.length > 0) {
            if (data[0].userPassword == password) {
                req.session.userid = data[0].userID;
                req.session.userEmail = data[0].userEmail;
                req.session.username = data[0].userName;
                req.session.userimg = data[0].userImage;
                req.session.role = data[0].role;
                if (data[0].role == "user") {
                    res.redirect("/");
                }
                else { res.redirect("/admin") }
            }
            else { res.redirect('/signin'); }
        }
        else { res.redirect('/signin'); }
    }
    else {
        res.redirect('/signin');
        res.end();
    }
}


// Forget Password
let payload;
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    const data = await User.findAll({ where: { userEmail: email } });
    if (data.length > 0) {
        secret = process.env.JWT_SECRET + data[0].userPassword;
        payload = { // for jwt
            email: data[0].userEmail,
            id: data[0].userID
        }
        const token = jwt.sign(payload, secret, { expiresIn: "15m" })
        const link = `http://localhost:6700/resetPassword/${data[0].userID}/${token}`
        console.log(link)
        const mailOptions = {
            from: "baydaartravels1@gmail.com", // sender address
            to: email,
            subject: "Reset Password", // Subject line
            text: "Open this 1 time link to Reset Password. " + link + "\nThis link will expire after 15 minutes.",
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent to ${email}: ${info.response}`);
                res.send("Check your Email to reset password")
            }
        });
    }
    else {
        res.send("User not registered")
    }
}

// Reset Password
// get func()
exports.getResetPassword = async (req, res) => {
    const { id, token } = req.params;
    if (payload.id != id) {
        res.send("invalid user")
    }
    const data = await User.findAll({ where: { userID: id } });
    const secret = process.env.JWT_SECRET + data[0].userPassword;
    try {
        jwt.verify(token, secret)
        res.render('resetPassword', { id: id, token: token })
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
//post func()
exports.postResetPassword = async (req, res) => {
    const { id, token } = req.params;
    const { password, password2 } = req.body;
    if (payload.id != id) {
        res.send("invalid user")
    }
    const data = await User.findAll({ where: { userID: id } });
    const secret = process.env.JWT_SECRET + data[0].userPassword;
    try {
        jwt.verify(token, secret)
        if (password == password2) {
            //1)hash password
            // bycrypt.js

            //2) update in db
            await User.update({ userPassword: password }, { where: { userID: id } });
            res.redirect("/signin")
        }
        else { res.redirect(`/resetPassword/${payload.id}/${token}`) }
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
//=====================================================================================
// Function for signup
exports.signup = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const image_path = req.file.originalname;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: image_path, role: 'user' });
    console.log('User was saved in Database')
    res.redirect('/signin')
}

