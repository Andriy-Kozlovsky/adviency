import {createSlice} from "@reduxjs/toolkit";

const listInitState = {
  list: [],
  itemToEdit: {
    gift: "",
    name: "",
    image: "",
    amount: "1",
    id: 0,
  },
};

const listSlice = createSlice({
  name: "list",
  initialState: listInitState,
  reducers: {
    add(state, action) {
      if (state.itemToEdit.gift !== "") {
        const newList = state.list.map((item: any) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        });

        // @ts-ignore
        state.list = newList;
      } else {
        // @ts-ignore
        state.list.push({...action.payload, id: Math.random()});
      }
    },
    remove(state, action) {
      state.list.splice(action.payload, 1);
    },
    edit(state, action) {
      state.itemToEdit = state.list[action.payload];
    },
    clearEdit(state) {
      state.itemToEdit = {gift: "", name: "", image: "", amount: "1", id: 0};
    },
    clear(state) {
      state.list.length = 0;
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
