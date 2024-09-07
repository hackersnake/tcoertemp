"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db")); // Adjust the path as needed
const facilityRoutes_1 = __importDefault(require("./routes/facilityRoutes"));
const eventRoute_1 = __importDefault(require("./routes/eventRoute")); // Corrected the import path
const app = (0, express_1.default)();
// Middleware setup
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Route setup
app.use('/facilities', facilityRoutes_1.default);
app.use('/events', eventRoute_1.default); // Adjusted route path to be consistent
// Define the home page route
app.get('/', (req, res) => {
    res.send('Welcome to the NVCTI Dashboard API');
});
// Define the test endpoint
app.get('/testing', (req, res) => {
    res.send('Testing endpoint is working!');
});
const PORT = process.env.PORT || 4000;
db_1.default.sync({ alter: true })
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(err => {
    console.error('Unable to sync the database:', err);
});
//# sourceMappingURL=app.js.map