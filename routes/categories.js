const router = require('express').Router()
const categoriesCtrl = require('../controllers/categories.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth, isAdmin } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, categoriesCtrl.index)
router.post('/', isAdmin, categoriesCtrl.create)


module.exports = router