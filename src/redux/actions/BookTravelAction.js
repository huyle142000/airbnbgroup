import { toast } from "react-toastify";
import { bothServiceToken } from "../../services/BothTokenService";

export const bookTravelAPI = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("dat-phong", payload);
      await navigate(`/bookingtravel/${payload.maPhong}`);
      toast.success("You have successfully booked travel !", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
};
