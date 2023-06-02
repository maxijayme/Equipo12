const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.patch('/', async(req,res)=>{
    try{
        const {logged_user_id,other_user_id} = req.query;
        await db.query(`UPDATE tsolicitudes SET estado = "aceptada" where (id_solicitante = "${logged_user_id}" and id_solicitado = "${other_user_id}") or (id_solicitante = "${other_user_id}" and id_solicitado = "${logged_user_id}") `,{type: QueryTypes.UPDATE })
        await db.query(`Insert into tamistades (id_usuario, id_amigo) values ("${logged_user_id}", "${other_user_id}")`,{type: QueryTypes.INSERT })
        res.status(200).json({msj:"request accepted"})
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;