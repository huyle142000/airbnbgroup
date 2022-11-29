import { toast } from "react-toastify";
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
//delete
export function deleteUserAPI(user, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(`users?id=${user}`);
      toast.success("Success");
      navigate(0);
      getUserListAPI();
    } catch (e) {}
  };
}
//Create User
export function createUser(value, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post(`users`, value);
      toast.success("Success");
      navigate("/admin");
    } catch (e) {}
  };
}

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
      console.log(e);
    }
  };
}
