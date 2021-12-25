const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('test_fan',
    'testing', //user
    'db12345', { //password
    host: 'localhost',
    dialect: 'postgres',
    timezone: '+07:00',
    logging: console.log,
    freezeTableName: true,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}) 

db.db = sequelize
db.Sequelize = Sequelize

module.exports = db