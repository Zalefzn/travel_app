import Sequelize from 'sequelize';
import conn from './database.js';

const {DataTypes} = Sequelize;

const userConn = conn.define(
    'userTravel', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password : {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true
    }
);

export default userConn;

(async() => {
    await userConn.sync();
});

