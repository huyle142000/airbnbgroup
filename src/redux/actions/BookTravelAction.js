import { bothServiceToken } from "../../Service/BothTokenService";

export const bookTravel = (data) => {
  return async (dispatch) => {
    try {
      const { data } = await bothServiceToken.post("dat-phong", data);
    } catch (error) {
      console.log(error.response);
    }
  };
};
