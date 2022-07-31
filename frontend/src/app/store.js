import { configureStore } from '@reduxjs/toolkit';
import guideReducer from '../features/guides/guidesSlice'
import newsReducer from '../features/news/newsSlice';
import cryptoReducer from '../features/topCryptos/topCryptosSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    guides: guideReducer,
    newsArticles: newsReducer,
    cryptos: cryptoReducer,
    auth: authReducer
  },
});
