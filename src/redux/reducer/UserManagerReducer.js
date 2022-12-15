import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  userInfo: {},
};
export const UserManagerReducer = createSlice({
  name: "UserManagerReducer",
  initialState,
  reducers: {
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
    getInforUser: (state, action) => {
      state.userInfo = action.payload;
      console.log(state.userInfo)
    },
  },
});
//truyền action
export const { getUserList,getInforUser } = UserManagerReducer.actions;
export default UserManagerReducer.reducer;
