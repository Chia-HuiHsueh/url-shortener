const express = require('express')
const app = express()
const port = 3000
require('./config/mongoose')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('This is url shortener.')
})

app.listen(port, (req, res) => {
  console.log('App is running on http://localhost:3000')
})