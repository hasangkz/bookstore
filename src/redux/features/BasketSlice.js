import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketItems: localStorage.getItem('basket')
    ? // @ts-ignore
      JSON.parse(localStorage.getItem('basket')).basketItems
    : [],
  total: localStorage.getItem('basket')
    ? // @ts-ignore
      JSON.parse(localStorage.getItem('basket')).total
    : 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const existAlreadyItem = state.basketItems.find(
        // @ts-ignore
        (item) => item._id === action.payload._id
      );
      if (!existAlreadyItem) {
        // @ts-ignore
        state.basketItems.unshift({ ...action.payload, quantity: 1 });
      } else {
        // @ts-ignore
        existAlreadyItem.quantity += 1;
      }
      state.total += action.payload.price;
    },
    deleteBook: (state, action) => {
      let newBasketItems = state.basketItems.filter(
        // @ts-ignore
        (item) => item._id !== action.payload._id
      );
      state.basketItems = newBasketItems;
      state.total -= action.payload.price * action.payload.quantity;
    },
    plusBook: (state, action) => {
      const book = state.basketItems.find(
        // @ts-ignore
        (item) => item._id === action.payload._id
      );
      // @ts-ignore
      book.quantity += 1;
      // @ts-ignore
      state.total += book.price;
    },
    minusBook: (state, action) => {
      const book = state.basketItems.find(
        // @ts-ignore
        (item) => item._id === action.payload._id
      );
      // @ts-ignore
      book.quantity -= 1;
      // @ts-ignore
      state.total -= book.price;
    },
    emptyBasket: (state) => {
      state.basketItems = [];
      state.total = 0;
    },
  },
});
export const { addBook, plusBook, minusBook, deleteBook, emptyBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
