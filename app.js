//Import all packages
const express = require("express")
const session = require("express-session")
var SequelizeStore = require("connect-session-sequelize")(session.Store);
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser"); // for decoding data (encoded by post)
const path = require('path')
const models = require("./models/index")
const db = require("./config/db")

//Application configuration
const app = express();
app.use(cookieParser());
app.set("view engine", "ejs"); // set the view engine to ejs
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files in public folder)

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json

// store session in database
var myStore = new SequelizeStore({
    db: db,
});
// Setting up session
app.use(session({
    key: 'session_cookie_name',
    secret: 'key that will sign cookie',
    resave: false, // for every req we will create new session
    saveUninitialized: false, // if we have not modified session dont save it
    store: myStore
}));
myStore.sync();

//Import all routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


