var con = require('../config/db');
const User = require('../models/user.model')

// Function for sign in
exports.signin = (req, res) => {
    const { email, password, usertype } = req.body;

    if (email && password) {
        query = `SELECT * FROM ${usertype} WHERE userEmail = "${email}"`;

        con.query(query, (error, data) => {
            if (error) {
                console.log("error in running query")
                throw error;
            }
            else {
                if (data.length > 0) {
                    if (data[0].userPassword == password) {
                        req.session.userid = data[0].userID;
                        res.redirect("/");
                    }
                    else {
                        res.send('Incorrect Password');
                    }
                }
                else {
                    res.send('Incorrect Email Address');
                }
            }
            res.end();
        });
    }
    else {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }
}

// Function for signup
exports.signup = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: 'user.jpg', role: 'user' });
    console.log('User was saved in Database')
    res.send('user created')
}