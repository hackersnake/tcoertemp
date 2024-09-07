"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Event extends sequelize_1.Model {
}
Event.init({
    event_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    created_by: {
        type: sequelize_1.DataTypes.INTEGER,
        // references: {
        //     model: User,
        //     key: 'user_id'
        // }
    }
}, {
    sequelize: db_1.default,
    tableName: 'Events',
    timestamps: false
});
exports.default = Event;
//# sourceMappingURL=event.js.map