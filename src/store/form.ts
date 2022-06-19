import {createSlice} from "@reduxjs/toolkit";

const formInitState = {
  gift: "",
  name: "",
  image: "",
  amount: "1",
  id: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: formInitState,
  reducers: {
    changeGift(state, action) {
      state.gift = action.payload;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
    changeAmount(state, action) {
      if (action.payload > 0) state.amount = action.payload;
    },
    resetValues(state) {
      state.gift = "";
      state.name = "";
      state.image = "";
      state.amount = "1";
      state.id = 0;
    },
    loadEditItem(state, action) {
      state.gift = action.payload.gift;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.amount = action.payload.amount;
      state.id = action.payload.id;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
