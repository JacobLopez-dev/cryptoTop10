const express = require('express')
const router = express.Router()

const {getTopTen} = require('../controllers/homeController')

router.route('/').get(getTopTen)

module.exports = router