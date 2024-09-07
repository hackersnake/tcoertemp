import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import User from './user';

interface EventAttributes {
    event_id?: number;
    event_name: string;
    start_date: Date;
    end_date: Date;
    description?: string;
    created_by: number;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'event_id'> {}

class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
    public event_id!: number;
    public event_name!: string;
    public start_date!: Date;
    public end_date!: Date;
    public description?: string;
    public created_by!: number;
}

Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    created_by: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: User,
        //     key: 'user_id'
        // }
    }
}, {
    sequelize,
    tableName: 'Events',
    timestamps: false
});

export default Event;
