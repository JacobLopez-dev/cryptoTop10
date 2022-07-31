const express = require('express')
const router = express.Router()

const {getNews} = require('../controllers/newsController')

router.route('/all-news').get(getNews)

module.exports = router