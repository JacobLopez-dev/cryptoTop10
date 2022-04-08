const express = require('express')
const router = express.Router()

const {getTopTen, getSingleCrypto} = require('../controllers/homeController')

router.route('/').get(getTopTen)

router.route('/:singleCrypto').get(getSingleCrypto)

module.exports = router