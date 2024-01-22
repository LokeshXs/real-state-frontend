import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
  name: "Notification",
  initialState: {
    open: false,
    type: "",
    message: "",
  },

  reducers: {
    notify: function (state, action) {
      if (action.payload.type === "success") {
        state.open = true;
        state.type = "success";
        state.message = action.payload.message;
      }

      if (action.payload.type === "error") {
        state.open = true;
        state.type = "error";
        state.message = action.payload.message;
      }
    },

    closeSnackbar: function (state) {
      state.open = false;
    },
  },
});

export const notificationActions = notification.actions;

export default notification;
