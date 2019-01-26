const express = require('express')
const { syncAndSeed, User } = require('../db')
const path = require('path')
const app = express()

syncAndSeed()

app.use('/dist', express.static(path.join(__dirname,'..','dist')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..','index.html'))
})

app.get('/api/users', async (req, res, next) => {
  const users = await User.findAll()
  res.send(users)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))

