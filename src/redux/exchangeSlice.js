import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usd: "",
  eur: "",
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    updateUSD(state, action) {
      state.usd = action.payload;
      state.eur = (action.payload / 1.07).toFixed(2);
    },
    updateEUR(state, action) {
      state.eur = action.payload;
      state.usd = (action.payload * 1.07).toFixed(2);
    },
  },
});

export const { updateUSD, updateEUR } = exchangeSlice.actions;
export default exchangeSlice.reducer;
