const express = require("express");
const model = require("./models/index");
const app = express();
const path = require('path')
const bodyParser = require("body-parser"); // for decoding data (encoded by post)
app.set("view engine", "ejs"); // set the view engine to ejs
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files in public folder)

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json
//import routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);
const port = 6700;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

//admin relationship with tours
//admin.hasMany(tours);

// let tourid = null;
// sequelize
//     .sync({ force: true }) // forced it to have admin foreign key in tour table node
//     .then((result) => {
//         //enter data
//         tourid = tours.id;
//         return tours.create({ name: "De Hunza", city: "Hunza ", departure_date: "10-5-2021 ", return_date: "10-12-2021 ", duration: "7 days " })

//     }).then(tours => {
//         console.log("data entered is: ", tours);
//     })

//     .then(tours => {
//         return tours.findAll({ where: tourid });
//     })

//     .then(tours => {

//         console.log("all orders are: ", tours);
//     })

//     .catch((error) => {
//         console.log(error);
//     }
//     )