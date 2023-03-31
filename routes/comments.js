const router = require('express').Router({ mergeParams: true })
const commentsCtrl = require('../controllers/comments.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, commentsCtrl.createComment)
router.delete('/:commentId', checkAuth, commentsCtrl.delete)

module.exports = router