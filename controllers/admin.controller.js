var con = require('../db');
var db = require('../models/user.model');
var router = require('../routes/admin.routes');

//input function for the admin data

exports.admininput = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const userObj = await User.create({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: 'user.jpg', role: 'admin' });
    console.log('User was saved in Database')
    res.redirect('/')
}

//update admin
exports.editadmin = async (req, res) => {
    const id = req.params.id;

    const data = await db.findAll({
        where: {
            userID: id
        }
    });
    res.render("updateadmin", { userdata: data[0] });
    console.log("data need to updated been add");
    res.redirect("/");
}
//update tour data
exports.updateadmin = async (req, res) => {
    const { name, email, password, password2, gender, phoneNumber } = req.body;
    const userObj = await User.update({ userName: name, userEmail: email, userPassword: password, userGender: gender, userPhoneNumber: phoneNumber, userImage: 'user.jpg', role: 'admin' }, { where: { userID: id } });
    console.log("data updated has been add");
    res.redirect("/");
}
//delete data of admin
exports.deleteadmin = (req, res) => {
    const id = req.params.id;

    const data = db.destroy({
        where: {
            userID: id
        }
    });

    console.log("data has been deleted");
    res.redirect("/");
}