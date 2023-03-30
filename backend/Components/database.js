import Sequelize from 'sequelize';

const conn = new Sequelize('travel_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default conn;