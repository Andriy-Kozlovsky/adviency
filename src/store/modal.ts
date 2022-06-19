import {createSlice} from "@reduxjs/toolkit";

const modalInitState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitState,
  reducers: {
    open(state) {
      state.open = true;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
