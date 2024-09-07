"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
// Define the Facility model class
class Facility extends sequelize_1.Model {
}
// Initialize the model
Facility.init({
    facility_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    facility_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: sequelize_1.DataTypes.STRING
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    slots_timing: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    tableName: 'Facilities',
    timestamps: false
});
exports.default = Facility;
//# sourceMappingURL=facility.js.map