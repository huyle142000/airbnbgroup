import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationList: [],
  inforLocation: {},

  roomFullList: [],

  roomList: [],
  inforRoom: {},
};
export const LocationRoomReducer = createSlice({
  name: "LocationRoomReducer",
  initialState,
  reducers: {
    getLocationList: (state, action) => {
      state.locationList = action.payload;
    },
    getInforLocation: (state, action) => {
      state.inforLocation = action.payload;
    },
    getListRoom: (state, action) => {
      state.roomList = action.payload;
    },
    getInforRoom: (state, action) => {
      state.inforRoom = action.payload;
    },
    getListFullRoom: (state, action) => {
      state.roomFullList = action.payload;
    },
  },
});
//truyền action
export const { getLocationList, getListRoom, getInforLocation, getInforRoom,getListFullRoom } =
  LocationRoomReducer.actions;
export default LocationRoomReducer.reducer;