import axios from 'axios'

const API_URL = '/api/guides/'

const createGuide = async (guideData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, guideData, config)
    return response.data
}

const getGuides = async () => {
    const response = await axios.get(API_URL+'/all-guides')
    return response.data
}

const guidesService = {
    createGuide,
    getGuides
}

export default guidesService