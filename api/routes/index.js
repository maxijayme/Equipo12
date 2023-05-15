const { Router } = require('express');
const users = require('./users.js')
const search = require('./search.js')
const login= require('./login.js')
const post = require('./post.js')
const profile = require('./profile.js')
const friends = require('./friends.js')
const friend_request = require('./friend_request.js')
const accept_friend = require('./accept_friend.js')
const delete_friend = require('./delete_friend.js')
const reject_friend = require('./reject_friend.js')
const router = Router();

router.use('/login', login)
router.use('/users', users)
router.use('/search_user', search)
router.use('/post', post)
router.use('/profile',profile)
router.use('/friends',friends)
router.use('/friend_request', friend_request)
router.use('/accept_friend', accept_friend)
router.use('/delete_friend', delete_friend)
router.use('/reject_friend', reject_friend)


module.exports = router;