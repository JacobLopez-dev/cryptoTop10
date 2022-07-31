import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import newsService from "./newsService"

const initialState = {
    newsArticles: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getNewsArticles = createAsyncThunk('news/getNews',
async(_, thunkApi) => {
    try{
        let response = await newsService.getNewsArticles()
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return (message)
    }
})

// export const getSingleCrypto = createAsyncThunk('cryptos/getSingleCrypto',
// async(cryptoID, thunkApi) => {
//     try{
//         let response = await cryptoService.getSingleCrypto(cryptoID)
//         return response.data[cryptoID]
//     }catch(error){
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return (message)
//     }
// })


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getNewsArticles.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getNewsArticles.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.newsArticles = action.payload
          })
          .addCase(getNewsArticles.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
    }
})

export const {
    reset,
} = newsSlice.actions

export default newsSlice.reducer