import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './slices/ticketSlice';
import categorySlice from './slices/categorySlice';
import ticketStatusSlice from './slices/ticketStatusSlice';

export const store = configureStore({
    reducer: {
      tickets: ticketSlice,
      categories: categorySlice,
      ticketStatus: ticketStatusSlice,
    }
})