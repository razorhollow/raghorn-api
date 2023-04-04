const router = require('express').Router()
const expensesCtrl = require('../controllers/expenses.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth, isAdmin } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', isAdmin, expensesCtrl.index)
router.post('/', isAdmin, expensesCtrl.create)
router.put('/:id', isAdmin, expensesCtrl.update)
router.delete('/:id', isAdmin, expensesCtrl.delete)

module.exports = router