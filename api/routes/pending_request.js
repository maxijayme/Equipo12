const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.post('/', async(req,res)=>{
    try{
        const {idUser} = req.body;
        console.log(req.body)
        const pendingRequest = await db.query(`Select U.fullname, U.photo, U.username, S.estado, S.id_solicitante, S.id_solicitado, S.id_solicitud from tusuario U inner join tsolicitudes S on U.id_usuario=s.id_solicitante where S.id_solicitado="${idUser}" AND S.estado='pendiente'`, { type: QueryTypes.SELECT })
        if(pendingRequest.length>0){
            res.status(200).json(pendingRequest)
            
        } else {
            res.status(200).json({msj:"no hay solicitudes pendientes"})
        }
    } catch(error) {
        res.send(error)
    }
})

router.patch('/', async(req,res)=>{
    try {
        const {id_solicitud,estado} = req.body
        console.log(req.body)
        await db.query(`Update tsolicitudes set estado="${estado}"  where id_solicitud = "${id_solicitud}"`,{type: QueryTypes.UPDATE })
        res.status(200).json({msj:'solicitud respondida'})
    } catch(error){
        res.error(error)
    }
})



module.exports = router;