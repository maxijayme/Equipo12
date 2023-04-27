const { Router } = require('express');
const users = require('./users.js')
const search = require('./search.js')
const login = require('./login.js')

const router = Router();

router.use('/login', login)
router.use('/users', users)
router.use('/search_user', search)


module.exports = router;