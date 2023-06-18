/**
 * route : /api/v1/auth
 */
const { Router } = require('express')

// middleware
const authMiddleware = require('../../../middlewares/authMiddleware')

// controller
const tenantController = require('../../../controllers/tenantController')

// router instans
const router = Router()

router.get('/', authMiddleware.verifyToken, tenantController.getAllTenants)
router.post('/', authMiddleware.verifyToken, tenantController.createTenant)

module.exports = router
