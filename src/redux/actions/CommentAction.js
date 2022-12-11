import { bothServiceToken } from "../../Service/BothTokenService";
import { getCommentList } from "../reducer/CommentReducer";

export const getListCommentAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get("binh-luan");
      let arrFilter;

      arrFilter = await data.content.filter((phong) => {
        return phong.maPhong == id;
      });
      dispatch(getCommentList(arrFilter));
    } catch (error) {
      console.log(error.response);
    }
  };
};
