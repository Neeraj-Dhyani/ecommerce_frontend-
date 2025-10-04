import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'; // ✅ this is the default export

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});