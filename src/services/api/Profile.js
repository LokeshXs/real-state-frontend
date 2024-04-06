import axios from "axios";
import { BACKEND_URL } from "../../../config/config";

class ProfileApis {
  async updateProfile(accessToken, { firstName, lastName, email }) {
    return await axios.post(
      `${BACKEND_URL}/api/v1/user/update`,
      {
        firstName,lastName,email
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
  }
}

export default ProfileApis;
