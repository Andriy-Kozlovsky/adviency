import {configureStore} from "@reduxjs/toolkit";

import listReducer from "./list";
import formReducer from "./form";
import modalReducer from "./modal";

const store = configureStore({
  reducer: {form: formReducer, modal: modalReducer, list: listReducer},
});

export default store;
