import { createSlice } from "@reduxjs/toolkit";

// initiate state
const initialState = { userName: "", showPrompt: true };

// create slice to create store
const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    hideUserNamePrompt: (state) => {
      state.showPrompt = !state.showPrompt;
    },
  },
});

// to create state in the main store
export default userNameSlice.reducer;
// to allow dispatching actions in the components
export const actions = userNameSlice.actions;
