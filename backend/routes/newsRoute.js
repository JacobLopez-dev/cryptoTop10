const express = require('express')
const router = express.Router()

const {getNews} = require('../controllers/newsController')

router.route('/all-news/:tickers/:page').get(getNews)

module.exports = router