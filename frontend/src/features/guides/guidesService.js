import axios from 'axios'

const API_URL = '/api/guides'

const createGuide = async (guideData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // pass guide data and bearer token for auth
    const response = await axios.post(API_URL, guideData, config)
    return response.data
}

// Get all guides
const getGuides = async () => {
    const response = await axios.get(API_URL+'/all-guides')
    return response.data
}

// Get single guide
const getGuide = async (guideSlug) => {
    const response = await axios.get(API_URL+`/${guideSlug}`)
    return response.data
}

// Delete single guide
const deleteGuide = async (guideSlug) => {
    const response = await axios.delete(API_URL+`/${guideSlug}`)
    return response.data
}

// Update single guide
const updateGuide = async (guideData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    console.log(guideData)

    // pass guide data and bearer token for auth
    const response = await axios.put(API_URL+`${guideData.slug}`, guideData, config)
    return response.data
}

const guidesService = {
    createGuide,
    getGuide,
    getGuides,
    deleteGuide,
    updateGuide
}

export default guidesService