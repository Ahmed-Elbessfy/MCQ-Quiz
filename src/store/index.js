import { configureStore } from "@reduxjs/toolkit";

// slices
import userNameReducer from "./slices/userNameSlice";
import questionsReducer from "./slices/questionsSlice";
import scoresReducer from "./slices/scoreSlice";

export default configureStore({
  reducer: {
    userNameReducer,
    questionsStore: questionsReducer,
    scoreStore: scoresReducer,
  },
});
