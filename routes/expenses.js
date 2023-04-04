const router = require('express').Router()
const expensesCtrl = require('../controllers/expenses.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', expensesCtrl.create)

module.exports = router