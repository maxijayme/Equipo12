const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.delete('/', async(req,res)=>{
    try{
        const {logged_user_id,other_user_id} = req.query;
        await db.query(`Delete from tsolicitudes where ((id_solicitante = "${logged_user_id}" and id_solicitado = "${other_user_id}") or (id_solicitante = "${other_user_id}" and id_solicitado = "${logged_user_id}")) and (estado = "pendiente")`,{type: QueryTypes.DELETE })
        res.status(200).json({msj:"friendship request rejected"})
    }
    catch(error){
        res.send(error)
    }
})



module.exports = router;