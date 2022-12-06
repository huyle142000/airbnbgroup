import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  ComponentContentModal: <p>1</p>,
};
export const ModalReducer = createSlice({
  name: "ModalReducer",
  initialState,
  reducers: {
    closeModal: (state, action) => {
      state.show = false;
    },
    openLogin: (state, action) => {
      state.show = true;
      state.ComponentContentModal = action.payload;
    },
    openRegister: (state, action) => {
      state.show = true;
      state.ComponentContentModal = action.payload;
    },
  },
});
//truyền action
export const { closeModal, openLogin, openRegister } = ModalReducer.actions;
export default ModalReducer.reducer;
