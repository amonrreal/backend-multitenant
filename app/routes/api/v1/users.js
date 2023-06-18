/**
 * route : /api/v1/auth
 */
const { Router } = require('express')

// middleware
const authMiddleware = require('../../../middlewares/authMiddleware')

// controller
const userController = require('../../../controllers/userController')

// router instans
const router = Router()

router.get('/', authMiddleware.verifyToken, userController.getAllUsers)
router.post('/', authMiddleware.verifyToken, userController.createUser)

module.exports = router
