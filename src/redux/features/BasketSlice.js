import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketItems: localStorage.getItem('basket')
    ? JSON.parse(localStorage.getItem('basket')).basketItems
    : [],
  total: localStorage.getItem('basket')
    ? JSON.parse(localStorage.getItem('basket')).total
    : 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const existAlreadyItem = state.basketItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existAlreadyItem) {
        state.basketItems.unshift({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      } else {
        existAlreadyItem.quantity += 1;
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteBook: (state, action) => {
      let newBasketItems = state.basketItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.basketItems = newBasketItems;
      state.total -= action.payload.price * action.payload.quantity;
    },
    emptyBasket: (state) => {
      state.basketItems = [];
      state.total = 0;
    },
  },
});
export const { addBook, deleteBook, emptyBasket } = basketSlice.actions;

export default basketSlice.reducer;
