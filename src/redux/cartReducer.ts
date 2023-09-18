import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropStateProducts, type PropsItem } from "~/schemas/schemasProducts";

interface PropsState {
  products: PropsItem[];
}

const initialState: PropsState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PropsItem>) => {
      const item: PropsItem | undefined = state.products.find(
        (item: PropsItem) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item: PropsItem) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

export const totalPrice = (products: [PropsItem]) => {
  let total = 0;
  products.forEach((item: PropsItem) => (total += item.quantity * item.price));
  return total.toFixed(2);
};
