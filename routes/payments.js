const router = require('express').Router()
const paymentsCtrl = require('../controllers/payments.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth, isAdmin } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', isAdmin, paymentsCtrl.index)
router.post('/', isAdmin, paymentsCtrl.create)
router.put('/:id', isAdmin, paymentsCtrl.update)
router.delete('/:id', isAdmin, paymentsCtrl.delete)

module.exports = router