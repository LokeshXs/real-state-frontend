import axios from "axios";

class ProfileApis {
  async updateProfile(accessToken, { firstName, lastName, email }) {
    return await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/update`,
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
