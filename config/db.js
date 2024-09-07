"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Create a new instance of Sequelize
const sequelize = new sequelize_1.Sequelize('nvcti_dashboard', 'root', 'manager', {
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
exports.default = sequelize;
//# sourceMappingURL=db.js.map