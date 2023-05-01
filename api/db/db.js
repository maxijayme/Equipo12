const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/teclapedia'
// aquí definimos los parámetros de conexion a la base de datos usando sequelize
const db = new Sequelize(path,{operatorAliases: 0});

db.authenticate().catch(err =>{
    console.log(err)
})

module.exports = db;