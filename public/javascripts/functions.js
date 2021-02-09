const URL = require('../../models/url')
module.exports = {

  generateShortUrl: () => {
    let shortUrlString = ''
    const strings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      let latter = strings[Math.floor(Math.random() * (strings.length))]
      shortUrlString += latter
    }
    return shortUrlString
  },

}
