import axios from "axios";

export async function loader({ request, params }) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/check-login`,
      {
        withCredentials: true,
      }
    );
   
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    return false;
  }
}
