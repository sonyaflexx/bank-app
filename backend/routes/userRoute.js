const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/sign-up', userController.signUp)
router.post('/sign-in', userController.signIn)
router.get('/auth', authMiddleware, userController.check)

router.get('/balance', userController.getBalance)
router.get('/history', userController.getHistory)

module.exports = router