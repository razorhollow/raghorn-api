const router = require('express').Router()
const postsCtrl = require('../controllers/posts.js')
const middleware = require('../middleware/auth.js')
const commentsRouter = require('./comments.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, profilesCtrl.index)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

router.use('/:id/comments', commentsRouter)

router.delete('/:id', checkAuth, postsCtrl.delete)
router.post('/', checkAuth, postsCtrl.addPost)
module.exports = router