const Router = require('express')
const router = new Router()
const userRouter = require('./userRoute')
const transactionRouter = require('./transactionRoute')
const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', authMiddleware, userRouter)
router.use('/transaction', authMiddleware, transactionRouter)

module.exports = router