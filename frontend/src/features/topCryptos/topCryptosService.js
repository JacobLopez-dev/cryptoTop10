import axios from 'axios'

const API_URL = '/api'

const getTopCryptos = async () =>{
    const response = await axios.get(API_URL)
    return response.data
}

const crpytoService = {
    getTopCryptos,
}

export default crpytoService