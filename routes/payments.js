const router = require('express').Router()
const paymentsCtrl = require('../controllers/payments.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth, isAdmin } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', isAdmin, paymentsCtrl.create)

module.exports = router