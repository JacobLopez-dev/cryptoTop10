import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import cryptoService from "./topCryptosService"

const initialState = {
    cryptos: [],
    singleCrypto: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getTopCryptos = createAsyncThunk('cryptos/getTopCryptos',
async(_, thunkApi) => {
    try{
        let response = await cryptoService.getTopCryptos()
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return (message)
    }
})

export const getSingleCrypto = createAsyncThunk('cryptos/getSingleCrypto',
async(cryptoID, thunkApi) => {
    try{
        let response = await cryptoService.getSingleCrypto(cryptoID)
        return response.data[cryptoID]
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
          .addCase(getSingleCrypto.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getSingleCrypto.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.singleCrypto = action.payload
          })
          .addCase(getSingleCrypto.rejected, (state, action) => {
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