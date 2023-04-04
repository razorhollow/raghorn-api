const router = require('express').Router()
const eventsCtrl = require('../controllers/events.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', eventsCtrl.create)
router.put('/:id', eventsCtrl.update)
router.delete('/:id', eventsCtrl.delete)


module.exports = router