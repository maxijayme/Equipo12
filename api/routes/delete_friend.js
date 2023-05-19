const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.delete('/', async(req,res)=>{
    try{
        const {logged_user_id,other_user_id} = req.query;
        await db.query(`Delete from tamistades where (id_usuario = "${logged_user_id}" and id_amigo = "${other_user_id}") or (id_usuario = "${other_user_id}" and id_amigo = "${logged_user_id}")`,{type: QueryTypes.DELETE })
        res.status(200).json({msj:"friendship deleted"})
    }
    catch(error){
        res.send(error)
    }
})



module.exports = router;