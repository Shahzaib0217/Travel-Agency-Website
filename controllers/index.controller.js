const sequelize = require("../db");

const tour = require("../models/tour.model");
const User = require("../models/user.model");

// Function for signup
exports.signup = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: 'user.jpg', role: 'admin' });
    console.log('User was saved in Database')
    res.send('user created')
}