const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql6583373', 'sql6583373', 'q81IqAnXU1', {
    host: 'sql6.freesqldatabase.com',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();

    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize