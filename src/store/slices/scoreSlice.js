import { createSlice } from "@reduxjs/toolkit";

// initiate state
const initialState = {
  score: 0,
  showScore: false,
  userAnswers: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
};

// create slice to create store
const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    // update score
    getUserAnswers: (state, action) => {
      state.userAnswers[action.payload.questionId] = action.payload.result;
    },
    // calculate total score
    calculateScore: (state) => {
      state.score = Object.values(state.userAnswers).reduce(
        (a, c) => (a += c),
        0
      );
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
