import axios from "axios";
import _ from "lodash";
export const apiConfig = {
  baseURL: process.env.API_URL || "http://localhost:8100/api/",
  headers: () => {
    return {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      "x-access-token": localStorage.getItem("token"),
    };
  },
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Quelque chose s'est mal passé. Veuillez vérifier votre connexion Internet ou contacter notre support.",
    status: 503,
    data: {},
  },
};
const request = axios;
request.interceptors.response.use(
  (response) => {
    if (_.isUndefined(response)) {
      return [];
    } else {
      return response;
    }
  },
  (error) => console.log(error)
);
const api = (method, url, variables, headers) =>
  new Promise((resolve, reject) => {
    request({
      url: `${url}`,
      method,
      headers: headers ? headers : apiConfig.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? JSON.stringify(variables) : undefined,
    })
      .then(({ data, status }) => {
        if (_.isUndefined(data)) {
          resolve([]);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        console.log("erreur", error);
        if (error) {
          reject(error);
        } else {
          reject(apiConfig.error);
        }
      });
  });
export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  patch: (...args) => api("patch", ...args),
  delete: (...args) => api("delete", ...args),
};
