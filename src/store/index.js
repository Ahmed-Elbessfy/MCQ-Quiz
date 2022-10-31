import { configureStore } from "@reduxjs/toolkit";

// slices
import userNameReducer from "./slices/userNameSlice";
import questionsReducer from "./slices/questionsSlice";

export default configureStore({
  reducer: {
    userNameReducer,
    questionsStore: questionsReducer,
  },
});
