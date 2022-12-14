import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inforDateBook: {},
  totalGuest: 0,
  guestAdults: 1,
  guestChildren: 0,
  guestInfants: 0,
  guestPets: 0,
};
export const BookTravel = createSlice({
  name: "BookTravel",
  initialState,
  reducers: {
    getInforDateToBook: (state, action) => {
      state.inforDateBook = action.payload;
    },
    getTotalGuest: (state, action) => {
      state.totalGuest = action.payload;
    },
    getGuestAdults: (state, action) => {
      state.guestAdults = action.payload;
    },
    getGuestChildren: (state, action) => {
      state.guestChildren = action.payload;
    },
    getGuestInfants: (state, action) => {
      state.guestInfants = action.payload;
    },
    getGuestPets: (state, action) => {
      state.guestPets = action.payload;
    },
  },
});
//truyền action
export const {
  getInforDateToBook,
  getTotalGuest,
  getGuestAdults,
  getGuestChildren,
  getGuestInfants,
  getGuestPets,
} = BookTravel.actions;
export default BookTravel.reducer;
