import axios from "axios";

class AuthenticationApis {
  async login({ email, password }) {
    return await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/signin`,
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
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/signup`, {firstName,lastName,email,password,passwordConfirm});
  }

  async resetPassword(resetToken,{password,passwordConfirm}){
    return await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/reset-password/${resetToken}`, {password,passwordConfirm}, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default AuthenticationApis;
