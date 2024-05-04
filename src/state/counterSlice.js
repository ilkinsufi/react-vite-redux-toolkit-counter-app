import { createSlice } from "@reduxjs/toolkit";

const storedValue = localStorage.getItem("counter");
const initialState = {
  value: storedValue ? parseInt(storedValue) : 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counter", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counter", state.value);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
