import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice(
  {
    name: "counter",
    initialState: {
      number: 0,
      num: {},
    },
    reducers: {
      increment: function(state, action) {
        state.number++;
      },
      decrement: function(state, action) {
        state.number--;
      },
      set: function(state, action) {
        state.number = action.payload;
      },
      reset: function(state, action) {
        state.number = 0;
      },
    }
  }
);

export default counterSlice.reducer;