import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //   console.log(action.payload);
      state = { ...state, ...action.payload };
      //   state = Object.assign(state, action.payload);
      //   console.log(state);
      return state;
    },
    clearCache: (state) => {
      state = {};
      return state;
    },
  },
});

export const { cacheResults, clearCache } = searchSlice.actions;

export default searchSlice.reducer;
