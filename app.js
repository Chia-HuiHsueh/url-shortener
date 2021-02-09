const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is url shortener.')
})

app.listen(port, (req, res) => {
  console.log('App is running on http://localhost:3000')
})