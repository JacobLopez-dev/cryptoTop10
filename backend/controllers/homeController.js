const asyncHandler = require('express-async-handler')
const axios = require('axios');

const coinmarketcap = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/',
    timeout: 1000,
    headers: { 'X-CMC_PRO_API_KEY': process.env.COIN_MARKETCAP_API_KEY }
})

const topCryptoParams = new URLSearchParams({
    start: 1,
    limit: 10
})

// @description Get current top 10 cryptos from coinmarketcap api
// @route       GET /
// @access      Public
const getTopTen = asyncHandler(async (req,res) => {
    const response = await coinmarketcap.get(`v1/cryptocurrency/listings/latest?${topCryptoParams}`)

    if(!response){
        res.status(400)
        throw new Error('Top 10 not retrieved')
    }

    res.status(201).json(response.data)
})

// https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=bitcoin

const getSingleCrypto = asyncHandler(async(req,res) => {
    const response = await coinmarketcap.get(`v1/cryptocurrency/info?&id=${req.params.singleCrypto}`)

    if(!response){
        res.status(400)
        throw new Error('Top 10 not retrieved')
    }

    res.status(201).json(response.data)
})

// @description Get Fiat Data
// @route       GET /
// @access      Public
const getPriceConversion = asyncHandler(async (req,res) => {
    const response = await coinmarketcap.get(`v2/tools/price-conversion?amount=${req.params.amount}&id=${req.params.id}&convert=${req.params.convert}`)
    if(!response){
        res.status(400)
        throw new Error('Top 10 not retrieved')
    }
    res.status(201).json(response.data)
})

module.exports = {
    getTopTen,
    getSingleCrypto,
    getPriceConversion
}