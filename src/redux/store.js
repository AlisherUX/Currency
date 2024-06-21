import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeSlice";

export const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
  },
});
