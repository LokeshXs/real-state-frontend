import axios from "axios";
import { BACKEND_URL } from "../../../config/config";

class AuthenticationApis {
  async login({ email, password }) {
    return await axios.post(
      `${BACKEND_URL}/api/v1/user/auth/signin`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }


  async signup({firstName,lastName,email,password,passwordConfirm}){
    return await axios.post(`${BACKEND_URL}/api/v1/user/auth/signup`, {firstName,lastName,email,password,passwordConfirm});
  }

  async forgotPassword(email){
    return await axios.post(`${BACKEND_URL}/api/v1/user/auth/forgot-password`, {email}, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  async resetPassword(resetToken,{newPassword,passwordConfirm}){
    return await axios.patch(`${BACKEND_URL}/api/v1/user/auth/reset-password/${resetToken}`, {newPassword,passwordConfirm}, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default AuthenticationApis;
