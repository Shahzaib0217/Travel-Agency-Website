const mysql = require("mysql2");
//--------------------------------------
// Data base connection code
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khansa1086',
    database: 'WebProgramming'
});

con.connect((error) => {
    if (error) {
        console.warn('error' + JSON.stringify(error, undefined, 2))
    }
);

//optionalchecking
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;