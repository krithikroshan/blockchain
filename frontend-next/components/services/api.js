import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
  
      if (originalConfig.url !== "/users/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          try {
            console.log("Fetching new refresh")
            const rs = await instance.post("/users/auth/refresh/", {
              refresh: TokenService.getLocalRefreshToken(),
            });
  
            const access_token = rs.data.access;
            TokenService.updateLocalAccessToken(access_token);
  
            return instance(originalConfig);
          } catch (_error) {
            console.log("Refresh token expired")
            console.log("Logging user out")
            TokenService.removeUser();
            return Promise.reject(_error);
          }
        }
      }
  
      return Promise.reject(err);
    }
  );
  
  export default instance;