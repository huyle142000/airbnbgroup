import Axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN } from "../utils/setting";

export class BothTokenService {
  put = (url, data) => {
    return Axios({
      method: "PUT",
      url: `${DOMAIN}${url}`,
      data,
      headers: {
        TokenCyberSoft: TOKEN,
      },
    });
  };
  post = (url, data) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data,
      headers: {
        TokenCyberSoft: TOKEN,
      },
    });
  };
  get = (url) => {
    return Axios({
      method: "GET",
      url: `${DOMAIN}${url}`,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
  delete = (url) => {
    return Axios({
      method: "DELETE",
      url: `${DOMAIN}${url}`,
      headers: {
        TokenCyberSoft: TOKEN,
      },
    });
  };
}
export const bothServiceToken = new BothTokenService();
