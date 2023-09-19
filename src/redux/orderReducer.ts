import { createSlice } from "@reduxjs/toolkit";
interface PropsStateOrder {
  order: {
    products: any;
    billing: any;
    shipping: any;
  };
}
const initialState: PropsStateOrder = {
  order: {
    products: null,
    billing: null,
    shipping: null,
  },
};

export const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.order.products = action.payload;
    },
    setBilling(state, action) {
      state.order.billing = action.payload;
    },
    setShipping(state, action) {
      state.order.shipping = action.payload;
    },
  },
});

export const { setProducts, setBilling, setShipping } = orderReducer.actions;

export default orderReducer.reducer;
