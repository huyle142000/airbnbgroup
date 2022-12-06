import { toast } from "react-toastify";
import { bothServiceToken } from "../../Service/BothTokenService";
import {
  getLocationList,
  getInforLocation,
  getListRoom,
  getInforRoom,
  getListFullRoom,
} from "../reducer/LocationRoomReducer";

export function getListLocationAPI() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get("vi-tri");

      dispatch(getLocationList(data.content));
    } catch (error) {}
  };
}
// upLoad
export function uploadLocation(datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("vi-tri", datas);
      toast.success("Success");
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
//edit location
export function editLocationAPI(id, datas, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.put(`vi-tri/${id}`, datas);
      toast.success("Cật nhập vị trí thành công!!!");
      navigate("/location");
    } catch (e) {
      console.log(e.response.data);
      toast.error("Error!!!");
    }
  };
}
//get Location
export function getInfoLocationAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(`vi-tri/${id}`);
      dispatch(getInforLocation(data.content));
    } catch (e) {
      console.log(e);
      toast.error("Error!!!");
    }
  };
}
// delete vị trí
export function deleteLocationAPI(id, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(`vi-tri/${id}`);
      toast.success("Success");
      navigate(0);
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
/***************** ROOM ********************/
//Full-Rooms
export function getListFullRoomAPI() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(`phong-thue`);
      dispatch(getListFullRoom(data.content));
    } catch (error) {}
  };
}
//IdRoom
export function getListRoomAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(
        `phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`
      );
      dispatch(getListRoom(data.content));
    } catch (error) {}
  };
}
// upLoad
export function uploadRoomAPI(datas, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("phong-thue", datas);
      navigate(-1);
      toast.success("Success");
    } catch (e) {
      console.log(e.response.data);
      toast.error("Error!!!");
    }
  };
}
//edit Room
export function editRoomAPI(id, datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.put(`phong-thue/${id}`, datas);
      toast.success("Thành công!!!");
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
//get Room
export function getInfoRoomAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get(`phong-thue/${id}`);
      dispatch(getInforRoom(data.content));
    } catch (e) {
      console.log(e);
      toast.error("Error!!!");
    }
  };
}
// delete vị trí
export function deleteRoomAPI(id, navigate) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(`phong-thue/${id}`);
      toast.success("Success");
      navigate(0);
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
