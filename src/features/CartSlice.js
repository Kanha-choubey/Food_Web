import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    plus(state, action) {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { add, remove, plus } = CartSlice.actions;
export default CartSlice.reducer;
