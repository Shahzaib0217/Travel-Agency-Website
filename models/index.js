const sequelize = require("../db"); //sirf aik directory peechy jana hai

sequelize.sync();
console.log("models synchronized");