const Router = require('express')
const router = new Router()
const TransactionController = require('../controllers/transactionController')

router.get('/', TransactionController.getAllTransactions)
router.post('/deposit', TransactionController.createDeposit)
router.post('/dispense', TransactionController.createDispense)
router.post('/transfer', TransactionController.createTransfer)
router.post('/payments/mobile', TransactionController.createMobilePayment)
router.post('/payments/internet', TransactionController.createInternetPayment)
router.post('/payments/taxes', TransactionController.createTaxesPayment)

module.exports = router