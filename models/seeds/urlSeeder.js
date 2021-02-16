const db = require('../../config/mongoose')
const Url = require('../url')

db.once('open', () => {
  Url.create({
    originalUrl: 'https://www.google.com',
  })
    .then(() => {
      console.log('insert data done...')
      return db.close()
    })
    .then(() => console.log('database connection close'))
})