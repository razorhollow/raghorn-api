const router = require('express').Router()
const eventsCtrl = require('../controllers/events.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth, isAdmin } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', isAdmin, eventsCtrl.index)
router.post('/', isAdmin, eventsCtrl.create)
router.put('/:id', isAdmin, eventsCtrl.update)
router.delete('/:id', isAdmin, eventsCtrl.delete)


module.exports = router