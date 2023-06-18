// const { User } = require('../models')

const userController = {
  getAllUsers: async (req, res) => {
    // Lógica para obtener todos los usuarios del tenant actual
    console.log('getAllUsers Controller')
    res.status(200).send({ message: 'All users' })
  },

  createUser: async (req, res) => {
    // Lógica para crear un nuevo usuario en el tenant actual
  },
}

module.exports = userController
