import { createSlice } from "@reduxjs/toolkit";


const computationSlice = createSlice( {
  name: "computation",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.number = action.payload;
    },
    decrement: (state, action) => {
      state.number = action.payload;
    },
  }
} );

export default computationSlice.reducer;