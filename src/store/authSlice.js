import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notificationActions } from "./notificationSlice";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    id: "",
    name: "",
    email: "",
    accessToken: "",
    roles: null,
    imageUrl: "",
  },
  reducers: {
    login: {
      reducer(state, action) {
        
        state.id = action.payload.id.id;
        state.name = action.payload.id.fullName;
        state.email = action.payload.id.email;
        state.accessToken = action.payload.id.accessToken;
        state.roles = action.payload.id.roles;
        state.imageUrl = action.payload.id.imageUrl;
      },
      prepare(id, name, email, accessToken, roles, imageUrl) {
        return {
          payload: {
            id,
            name,
            email,
            accessToken,
            roles,
            imageUrl,
          },
        };
      },
    },

    logout(state, actions) {
      state.id = "";
      state.name = "";
      state.email = "";
      state.accessToken = "";
      state.roles = "";
      state.imageUrl = "";
    },

    update(state, actions) {
      state.name = actions.payload.fullName;
      state.email = actions.payload.email;
      state.imageUrl = actions.payload.imageUrl;
    },
  },
});

export const updateTheData = (data) => {
  return (dispatch, getState) => {
    console.log(data);
    const updateUser = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/user/update`,
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getState().auth.accessToken}`,
            },
            withCredentials: true,
          }
        );

        dispatch(
          authSlice.actions.update({
            email: response.data.user.email,
            fullName: response.data.user.fullName,
            imageUrl: response.data.user.imageUrl,
          })
        );

        dispatch(
          notificationActions.notify({
            type: "success",
            message: "Profile is successfully updated 😜",
          })
        );
      } catch (err) {
        dispatch(
          notificationActions.notify({
            type: "error",
            message: "Not able to update the info, Please refresh 🔃",
          })
        );
        dispatch(authActions.logout());
      }
    };

    updateUser();
  };
};

export const authActions = authSlice.actions;
export default authSlice;
