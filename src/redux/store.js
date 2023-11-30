import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './features/BasketSlice';
export const store = configureStore({
  reducer: {
    // @ts-ignore
    basket: basketSlice,
  },
});
