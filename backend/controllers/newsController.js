const asyncHandler = require('express-async-handler')
const axios = require('axios')

const news = axios.create({
    baseURL: 'https://cryptonews-api.com/api/',
    timeout: 1000,
    headers: { 'Authorization': `Bearer ${process.env.CRYPTO_NEWS_API_KEY}`}
})


const getNews = asyncHandler(async (req, res) => {
    const response = await news.get('v1?tickers=BTC&items=20&page=1')

    if(!response){
        res.status(400)
        throw new Error('Top 10 not retrieved')
    }

    res.status(201).json(response.data)
})

module.exports = {
    getNews
}