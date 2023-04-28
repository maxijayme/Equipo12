const { Router } = require('express');
const users = require('./users.js')
const search = require('./search.js')
<<<<<<< HEAD
=======
const login = require('./login.js')
const post = require('./post.js')
>>>>>>> maxi

const router = Router();

router.use('/login', login)
router.use('/users', users)
router.use('/search_user', search)
router.use('/post', post)


module.exports = router;