import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import newsService from "./newsService"

const initialState = {
    newsArticles: [],
    page: 1,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getNewsArticles = createAsyncThunk('newsArticles/getNews',
async({cryptoList, page}, thunkApi) => {
    try{
        let response = await newsService.getNewsArticles(cryptoList, page)
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        resetNews: (state) => initialState,
        nextPage: (state) => {
            if(state.page === 5) return
            state.page = state.page + 1
        },
        prevPage: (state) => {
            if(state.page === 1) return
            state.page = state.page - 1
        }
        
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
    resetNews,
    prevPage,
    nextPage
} = newsSlice.actions

export default newsSlice.reducer