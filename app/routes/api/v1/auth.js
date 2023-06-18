/**
 * route : /api/v1/auth
 */
const { Router } = require('express')

// controller
const authController = require('../../../controllers/authController')

// router instans
const router = Router()

router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router
