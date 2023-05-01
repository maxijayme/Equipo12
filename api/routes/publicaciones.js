const { Router } = require('express');
const router = Router();
const initialState = require('../../client/initialState.js')
const db = require('../db/db.js');
const { QueryTypes } = require('sequelize');

router.get('/load_user',(req,res) => {
    
});