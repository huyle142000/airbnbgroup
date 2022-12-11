import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inforDateBook: {},
};
export const BookTravel = createSlice({
  name: "BookTravel",
  initialState,
  reducers: {
    getInforDateToBook: (state, action) => {
      state.inforDateBook = action.payload;
    },
  },
});
//truyền action
export const {getInforDateToBook} = BookTravel.actions;
export default BookTravel.reducer;
