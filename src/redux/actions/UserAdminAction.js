import { toast } from "react-toastify";
import { history } from "../../App";
import { bothServiceToken } from "../../Service/BothTokenService";
import { getInforUser, getUserList } from "../reducer/UserManagerReducer";

export const getUserListAPI = () => {
  return async (dispacth) => {
    try {
      const { data } = await bothServiceToken.get(`users`);
      dispacth(getUserList(data.content));
    } catch (e) {
      console.log(e);
    }
  };
};
export function getInfoUserAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(`users/${id}`);
      dispatch(getInforUser(data.content));
    } catch (e) {
      console.log(e);
    }
  };
}
// edit User
export function editUserAPI(id, user, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.put(`users/${id}`, user);
      toast.success("Cật nhật thành công");
      navigate("/admin");
      getUserListAPI();
    } catch (e) {
      console.log(e)
    }
  };
}
