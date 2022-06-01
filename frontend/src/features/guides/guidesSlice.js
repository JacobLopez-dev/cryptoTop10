import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import guidesService from "./guidesService"

const initialState = {
    title: ''
}

export const guideSlice = createSlice({
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
  } = guideSlice.actions
  
  export default guideSlice.reducer