var con = require('../config/db');
const User = require('../models/user.model')

// Function for sign in
exports.signin = async (req, res) => {
    const { email, password, usertype } = req.body;
    if (email && password) {
        const data = await User.findAll({ where: { userEmail: email } });
        if (data.length > 0) {
            if (data[0].userPassword == password) {
                req.session.userid = data[0].userID;
                res.redirect("/");
            }
            else { res.send('Incorrect Password'); }
        }
        else { res.send('Incorrect Email Address'); }
    }
    else {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }
}

// Function for signup
exports.signup = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const image_path = req.file.originalname;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: image_path, role: 'user' });
    console.log('User was saved in Database')
    res.send('user created')
}