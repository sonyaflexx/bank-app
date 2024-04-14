const Router = require('express')
const router = new Router()
const userRouter = require('./userRoute')
const transactionRouter = require('./transactionRoute')
const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', userRouter)
router.use('/transaction', transactionRouter)

module.exports = router