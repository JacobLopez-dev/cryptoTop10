import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import crpytoService from "./topCryptosService"

const initialState = {
    cryptos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getTopCryptos = createAsyncThunk('cryptos/getCryptos',
async(_, thunkApi) => {
    try{
        let response = await crpytoService.getTopCryptos()
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return (message)
    }
})

const topCryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTopCryptos.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getTopCryptos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cryptos = action.payload
          })
          .addCase(getTopCryptos.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
    }
})

export const {
    reset,
} = topCryptoSlice.actions

export default topCryptoSlice.reducer