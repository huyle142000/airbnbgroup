import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrListComment: [],
};
export const CommentReducer = createSlice({
  name: "CommentReducer",
  initialState,
  reducers: {
    getCommentList: (state, action) => {
      state.arrListComment = action.payload;
    },
   
  },
});
//truyền action
export const {
    getCommentList
} = CommentReducer.actions;
export default CommentReducer.reducer;
