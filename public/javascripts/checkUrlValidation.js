const URL = require('../../models/url')
const validUrl = require('valid-url')

//驗證輸入的網址是否有效
function checkUrlValidation(urlData, baseUrl, res) {
  const inputLongUrl = urlData.originalUrl

  if (!(validUrl.isUri(inputLongUrl))) {
    console.log('not a url')
    return URL.find()
      .lean()
      .then(() => res.render('invalid', { inputLongUrl }))
      .catch(error => console.log(error))
  } else {
    checkUrlInDatabase(urlData, baseUrl, inputLongUrl, res)
  }
}

//檢查輸入的網址是否已存在database
function checkUrlInDatabase(urlData, baseUrl, inputLongUrl, res) {
  console.log(inputLongUrl)
  URL.findOne({ originalUrl: inputLongUrl })
    .lean()
    .then(result => {
      if (result) {
        res.render('index', { result, baseUrl })
      } else {
        // saveShortenedUrl(checkRandomUrl(generateRandomUrl()), urlData, baseUrl, inputLongUrl, res)
        return saveShortenedUrl(urlData, baseUrl, inputLongUrl, res)
      }
    })
    .catch(error => console.log(error))
}

//將產生好的短網址存入database並渲染畫面
function saveShortenedUrl(inputLongUrl, res) {
  const url = inputLongUrl.originalUrl
  return URL.create({ originalUrl: url })
    .then(() => res.render('index', { url }))
}


module.exports = checkUrlValidation