import { createSlice } from "@reduxjs/toolkit";

// initiate state
const initialState = { score: 0, showScore: false };

// create slice to create store
const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    // update score
    setScore: (state, action) => {
      state.score = state.score + action.payload;
    },
    // hide and show score
    setScoreShow: (state) => {
      state.showScore = !state.showScore;
    },
  },
});

// to create state in the main store
export default scoreSlice.reducer;
// to allow dispatching actions in the components
export const actions = scoreSlice.actions;
