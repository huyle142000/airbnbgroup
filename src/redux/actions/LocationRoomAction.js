import { toast } from "react-toastify";
import { bothServiceToken } from "../../Service/BothTokenService";
import {
  getLocationList,
  getInforLocation,
  getListRoom,
  getInforRoom,
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
export function editLocationAPI(id, datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.put(`/vi-tri/${id}`, datas);
    } catch (e) {
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
export function deleteLocationAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(`vi-tri/${id}`);
      toast.success("Success");
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
/***************** ROOM ********************/
export function getListRoomAPI() {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.get("phong-thue");
      console.log(data);
      dispatch(getListRoom(data.content));
    } catch (error) {}
  };
}
// upLoad
export function uploadRoomAPI(datas) {
  console.log(123123)
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("phong-thue", datas);
      toast.success("Success");
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
//edit Room
export function editRoomAPI(id, datas) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.put(`phong-thue/${id}`,datas);
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
export function deleteRoomAPI(id) {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.delete(`phong-thue/${id}`);
      toast.success("Success");
    } catch (e) {
      toast.error("Error!!!");
    }
  };
}
