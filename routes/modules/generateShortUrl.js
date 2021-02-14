const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  if (!validUrl.isUri(originalUrl)) {
    return res.status(401).json("此為無效網址，請返回上一頁重新輸入")
  }
})

module.exports = router