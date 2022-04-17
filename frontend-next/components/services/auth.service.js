import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(wallet_address, signature) {
    return api
      .post("/users/auth/login", {
        wallet_address,
        signature
      })
      .then(response => {
        if (response.data.access_token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  getCurrentUser() {
    return TokenService.getUser();
  }

  getUserOrLogin() {
    
  }
}

export default new AuthService();