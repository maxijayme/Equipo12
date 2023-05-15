const { Router } = require('express');
const router = Router();
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

/*
Enviar soliciud
1-Busco si es amigo - localhost:3001/friend_request?logged_user_id=1&other_user_id=2
1-a) Si es amigo muestro boton "Eliminar contacto"
2-Busco si hay solicitud pendiente
2-a)Si no hay solicitud pendiente muestro botón "Agregar contacto"
2-b)Si esta pendiente muestro botón "Cancelar solicitud"
3-Envío solicitud
3-a)Creo registro en "tsolicitudes"
3-b)Cambio botón por "Solicitud pendiente"

Recibir solicitud
1-Muestro botones "Aceptar" / "Rechazar"
1-a)Si acepto cambio botón por "Amigo"
1-a)-I)Agrego relaciones en tabla "tamistades"
1-a)-II)Elimino registro solicitud tabla "tsolicitudes"
1-b)Si rechazo solicitud, elimino card.
1-b)-I) Elimino registro solicitud tabla "tsolicitudes"

Eliminar amista
1- Muestro botón "Eliminar contacto"
2- Elimino registro de tabla "tamistades"

 */

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