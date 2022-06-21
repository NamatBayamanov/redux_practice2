import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import computationReducer from "./Computation/computationSlice";
const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      computation: computationReducer,
    }
  }
);

export default store;