import { Button } from "@mui/material";
import  { useEffect, useRef } from "react";
import { updateTheData } from "../store/authSlice";
import { useDispatch } from "react-redux";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUD_UPLOAD_PRESET,
      },
      function (error, result) {
        if (result.info?.url) {
          dispatch(updateTheData({ imageUrl: result.info.url }));
        }

      }
    );
  }, [dispatch]);

  return (
    <Button onClick={() => widgetRef.current.open()} variant="outlined" sx={{
      borderRadius: '24px',
      fontSize: '16px',
      letterSpacing: "1.2px",
      '@media(max-width:640px)': {
        fontSize: '14px'
      }

    }}>Change Profile Picture</Button>
  )
};

export default UploadWidget;
