const express = require('express')
const router = express.Router()

const {getTopTen, getSingleCrypto, getPriceConversion} = require('../controllers/homeController')

router.route('/').get(getTopTen)

router.route('/:singleCrypto').get(getSingleCrypto)

router.route('/fiat/:amount/:id/:convert').get(getPriceConversion)

module.exports = router