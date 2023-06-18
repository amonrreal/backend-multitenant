const express = require('express')
const cors = require('cors')
const router = require('./app/routes')
const { sequelize } = require('./app/models')

const app = express()
const port = 3000

app.use(cors())
app.use(router)

app.listen(port, async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log('Connection successfully established with the database')
    })
    .catch((error) => {
      console.error('Failed to connect to the database:', error)
    })
  console.log(`http://localhost:${port}`)
})
