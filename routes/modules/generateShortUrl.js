const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const URL = require('../../models/url')

router.post('/', (req, res) => {
  const inputLongUrl = req.body.inputUrl
  //驗證輸入的網址是否有效
  if (!(validUrl.isUri(inputLongUrl))) {
    console.log('not a url')
    return URL.find()
      .then(() => res.render('invalid', { inputLongUrl }))
      .catch(error => console.log(error))
  }
  //確認輸入的網址是否已在資料庫
  //   URL.findOne({ originalUrl: inputLongUrl })
  //     .lean()
  //     .then()
  //   .catch(error => console.log(error))
})

module.exports = router