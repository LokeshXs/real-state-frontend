import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { notificationActions } from "../store/notificationSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const refresh = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/refresh`,
        {
          withCredentials: true,
        }
      );

      console.log(user);
      console.log(response.data);

      dispatch(
        authActions.login({
          id: response.data.data.user._id,
          accessToken: response.data.accessToken,
          email: response.data.data.user.email,
          fullName: response.data.data.user.fullName,
          roles: response.data.data.user.role,
          imageUrl: response.data.data.user.imageUrl,
        })
      );

      dispatch(
        notificationActions.notify({
          message: `${response.data.data.user.fullName} is successfully logged in 😎`,
          type: "success",
        })
      );

      return response.data.accessToken;
    } catch (error) {
      if (error.message === "Network Error") {
        dispatch(
          notificationActions.notify({
            message: `Please check internet connection 🛜`,
            type: "error",
          })
        );
      } else {
        console.log(error.message);
        // dispatch(
        //   notificationActions.notify({
        //     message: `${error.response.data.message} 😔`,
        //     type: "error",
        //   })
        // );
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
