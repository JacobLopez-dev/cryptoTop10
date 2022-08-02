import axios from 'axios'

const API_URL = '/api/news/all-news'

const getNewsArticles = async (cryptoList, page) =>{
    const response = await axios.get(API_URL + `/${cryptoList}/${page}`)
    return response.data
}


const newsService = {
    getNewsArticles
}

export default newsService