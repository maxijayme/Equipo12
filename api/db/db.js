const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/teclapedia'
const db = new Sequelize(path,{operatorAliases: 0});

db.authenticate().catch(err =>{
    console.log(err)
})

module.exports = db;