var con = require('../db');
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
exports.signup = (req, res) => {
    const { name, user_email_address, password } = req.body;
}