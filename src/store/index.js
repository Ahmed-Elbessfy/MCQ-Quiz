import { configureStore } from "@reduxjs/toolkit";

// slices
import userNameReducer from "./slices/userNameSlice";

export default configureStore({
  reducer: {
    userNameReducer,
  },
});
