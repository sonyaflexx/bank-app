const Router = require('express')
const router = new Router()
const TransactionController = require('../controllers/transactionController')

router.get('/', TransactionController.getAllTransactions)
router.post('/deposit', TransactionController.createDeposit)


module.exports = router