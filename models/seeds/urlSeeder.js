const db = require('../../config/mongoose')
const URL = require('../url')

db.once('open', () => {
  URL.create({
    longUrl: 'https://www.facebook.com/',
    shortUrl: `JPstz`
  }, {
    longUrl: 'https://codepen.io/',
    shortUrl: `eSB0B`
  })
  console.log('done')
})

