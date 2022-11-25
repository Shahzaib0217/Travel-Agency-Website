// var con = require('../db');
// //input function for the admin data

// exports.admininput(req, res)
// {
//     if (!req.file) {
//         console.log("file not uploaded!");
//     }

//     // simple insertion
//     var id = req.body.userid;
//     var name = req.body.name;
//     var gender = req.body.gender;
//     var qualification = req.qualification;
//     con.query(query, (error, data) => {

//         if (error) {
//             throw error;
//         }
//         else {
//             res.redirect('/');
//         }

//     });
// }

// //search data of admin
// exports.adminsearch(req, res)
// {
//     var id = req.body.id;
//     //query by sequilize
//     con.query(query, function (error, user_data) {

//         if (error) {
//             throw error;
//         }
//         else {
//             res.render('/displayadmin', { data: user_data, title: "Search", })
//         }

//     });
// }
// //delete admin by help of id
// exports.deleteadmin(req, res)
// {
//     var id = req.params.id;

//     con.query(query, function (error, data) {

//         if (error) {
//             throw error;
//         }
//         else {
//             res.redirect("/");
//         }

//     });

// }
// //update data of admin
// exports.update = (req, res) => {

//     var id = req.params.id;


//     con.query(query, function (error, data) {

//         res.render('updateTable', { userData: data[0] });
//     });
// }
// //--------------------------------------
// exports.updated = (req, res) => {
//     con.query(query, function (error, data) {

//         if (error) {
//             throw error;
//         }
//         else {
//             res.redirect('/');
//         }

//     });

// }
