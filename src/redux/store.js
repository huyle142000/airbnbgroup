import { configureStore } from "@reduxjs/toolkit";
import UserManagerReducer from "./reducer/UserManagerReducer";
export const store = configureStore({
  reducer: { UserManagerReducer },
});
