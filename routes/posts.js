const router = require('express').Router()
const postsCtrl = require('../controllers/posts.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, profilesCtrl.index)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.post('/:id/posts', checkAuth, postsCtrl.addPost)
module.exports = router