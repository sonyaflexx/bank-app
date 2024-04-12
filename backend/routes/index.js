const Router = require('express')
const router = new Router()
const userRouter = require('./userRoute')
const transactionRouter = require('./transactionRoute')

router.use('/user', userRouter)
router.use('/transaction', transactionRouter)

module.exports = router