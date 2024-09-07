// user.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface UserAttributes {
    user_id: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    role: 'admin' | 'student';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'user_id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public first_name!: string;
    public last_name!: string;
    public role!: 'admin' | 'student';
}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'student'),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'Users',
    timestamps: false
});

export default User;
