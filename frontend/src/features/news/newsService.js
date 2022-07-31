import axios from 'axios'

const API_URL = '/api/news/all-news'

const getNewsArticles = async () =>{
    const response = await axios.get(API_URL)
    return response.data
}


const newsService = {
    getNewsArticles
}

export default newsService