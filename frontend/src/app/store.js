import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articleSlice'
import cryptoReducer from '../features/topCryptos/topCryptosSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    cryptos: cryptoReducer,
    auth: authReducer
  },
});
