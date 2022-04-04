import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import articleSerivce from './articlesService'

const initialState = {
    title: ''
}

export const articleSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
    
    },
  })
  
  export const {
      reset,
  } = articleSlice.actions
  
  export default articleSlice.reducer