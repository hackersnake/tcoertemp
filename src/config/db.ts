import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize
const sequelize = new Sequelize('nvcti_dashboard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Authenticate the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
