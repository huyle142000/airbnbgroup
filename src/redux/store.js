import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./reducer/FormReducer";
import LocationRoomReducer from "./reducer/LocationRoomReducer";
import ModalReducer from "./reducer/ModalReducer";
import UserManagerReducer from "./reducer/UserManagerReducer";
export const store = configureStore({
  reducer: {
    UserManagerReducer,
    LocationRoomReducer,
    ModalReducer,
    FormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
