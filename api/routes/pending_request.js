const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

// Esta trae solo solicitudes pendientes, desde el punto de vista de solicitado
router.post('/pending', async(req,res)=>{
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

// Todas las solicitudes desde el punto de vista de solicitante
router.post('/', async(req,res)=>{
    try{
        const {idUser} = req.body;
        const pendingRequest = await db.query(`Select U.fullname, U.photo, U.username, S.estado, S.id_solicitante, S.id_solicitado, S.id_solicitud from tusuario U inner join tsolicitudes S on U.id_usuario=s.id_solicitante where S.id_solicitante="${idUser}"`, { type: QueryTypes.SELECT })
        if(pendingRequest.length>0){
            res.status(200).json(pendingRequest)
            
        } else {
            res.status(200).json({msj:"no hay solicitudes pendientes"})
        }
    } catch(error) {
        res.send(error)
    }
})

// Solicitud pendiente o amistad con un usuario concreto
router.get('/', async(req,res)=>{
    try{
        const {idUser, otherUser} = req.query;
        const request = await db.query(`Select estado, id_solicitud from tsolicitudes where (id_solicitante="${idUser}" and id_solicitado="${otherUser}") or (id_solicitante="${otherUser}" and id_solicitado="${idUser}")`, { type: QueryTypes.SELECT })
        console.log(request)
        if(request.length>0) {
            res.status(200).json({estado:request[0].estado, msj:"",id_solicitud:request[0].id_solicitud})
        } else {
            res.status(200).json({estado:"",msj:"No hay solicitudes pendientes",id_solicitud:0})
        }
    } catch(error) {
        res.send(error)
    }
})


// Esta para cambiar el estado de una solicitud en curso -- > aceptada, rechazada, pendiente, eliminada (si dejan de ser amigos)
router.patch('/', async(req,res)=>{
    try {
        const {id_solicitud,estado} = req.body
        await db.query(`Update tsolicitudes set estado="${estado}"  where id_solicitud = "${id_solicitud}"`,{type: QueryTypes.UPDATE })
        res.status(200).json({msj:`estado de solicitud actualizada a ${estado}`})
    } catch(error){
        res.error(error)
    }
})

// Para enviar una nueva solicitud
router.post('/newRequest', async(req,res)=>{
    try{
        const {logged_user_id,other_user_id}= req.body;
        await db.query(`Insert into tsolicitudes (id_solicitante, id_solicitado) values ("${logged_user_id}", "${other_user_id}")`,{type: QueryTypes.INSERT })
        res.status(200).json({msj:"friend request sended"})
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;