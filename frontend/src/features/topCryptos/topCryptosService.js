import axios from 'axios'

const API_URL = '/api'

const getTopCryptos = async () =>{
    const response = await axios.get(API_URL)
    return response.data
}

// Get single crypto meta data
const getSingleCrypto = async (crypto) => {
    const response = await axios.get(API_URL + `/${crypto}`)
    return response.data
}

const cryptoService = {
    getTopCryptos,
    getSingleCrypto
}

export default cryptoService