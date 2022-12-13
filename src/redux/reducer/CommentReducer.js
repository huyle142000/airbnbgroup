import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrListComment: [],
  starComment: {},
};
export const CommentReducer = createSlice({
  name: "CommentReducer",
  initialState,
  reducers: {
    getCommentList: (state, action) => {
      state.arrListComment = action.payload;
    },
    getStarComment: (state, action) => {
      state.starComment = action.payload;
    },
  },
});
//truyền action
export const { getCommentList, getStarComment } = CommentReducer.actions;
export default CommentReducer.reducer;
