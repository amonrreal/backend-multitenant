// const jwt = require('jsonwebtoken')

const authMiddleware = {
  verifyToken: (req, res, next) => {
    // Lógica para verificar el token de autenticación
    next()
  },
}

module.exports = authMiddleware
