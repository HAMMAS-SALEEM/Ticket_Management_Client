import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './slices/ticketSlice';
import categorySlice from './slices/categorySlice'

export const store = configureStore({
    reducer: {
      tickets: ticketSlice,
      categories: categorySlice,
    }
})