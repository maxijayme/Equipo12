const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');


router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const contactUser = await db.query(`Select phone,email,linkedin,photo from tusuario where id_usuario = "${id}"`, { type: QueryTypes.SELECT });
        const jobsUser = await db.query(`Select puesto,empresa,funciones,f_inicio,f_fin,actualidad from ttrabajos where id_usuario = "${id}"`, { type: QueryTypes.SELECT });
        const studiesUser = await db.query(`Select titulo,centro,f_inicio,f_fin,actualidad from testudios where id_usuario = "${id}"`, { type: QueryTypes.SELECT });
        const otherDataUser = await db.query(`Select licencia,disponibilidad,preferencia,hobbies from totros_datos where id_usuario = "${id}"`, { type: QueryTypes.SELECT });
        const actualUser = [contactUser,jobsUser,studiesUser,otherDataUser];
        console.log(actualUser);
        res.status(200).json(actualUser);
    }catch(err){
        console.log(err);
    }
});

module.exports=router;