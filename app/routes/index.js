/**
 * routes/index.js
 */
const { Router } = require('express')
const router = Router()

// api version
const API_VERSION = '/api/v1'

// controllers
const authRoutes = require(`.${API_VERSION}/auth`)
const tenantRoutes = require(`.${API_VERSION}/tenants`)
const userRoutes = require(`.${API_VERSION}/users`)

// routes
router.get('/', (_, res) =>
  res.status(200).send({ message: 'Welcome to Backend Multitenant APIv1.' })
)
router.use(`${API_VERSION}/auth`, authRoutes)
router.use(`${API_VERSION}/tenants`, tenantRoutes)
router.use(`${API_VERSION}/users`, userRoutes)

module.exports = router
