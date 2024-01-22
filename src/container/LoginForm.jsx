import { Button } from "@mui/material";
import googleIcon from "../assets/google.png";
import { useFormik } from "formik";
import { LoginSchema } from "../utils/FormSchema";
import TextFieldComponent from "../components/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { notificationActions } from "../store/notificationSlice";
import LoadingButton from '@mui/lab/LoadingButton';
import { SwapVerticalCircleTwoTone } from "@mui/icons-material";
import ForgotPasswordModal from "../components/ForgotPasswordModal";


const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = async (values) => {

    console.log(values);
    setIsSubmitting(true);
    try {

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/signin`, JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      dispatch(authActions.login(
        response.data.data.user._id,
        response.data.data.user.fullName,
        response.data.data.user.email,
        response.data.data.token,
        response.data.data.user.role,
        response.data.data.user.imageUrl,
      ));


      dispatch(notificationActions.notify({
        message: `${response.data.data.user.fullName} is successfully logged in 😎`,
        type: 'success'
      }));
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      if (error.message === "Network Error") {
        dispatch(notificationActions.notify({
          message: `Please check internet connection 🛜`,
          type: 'error'
        }));
      }
      else {
        console.log(error.message);
        dispatch(notificationActions.notify({
          message: `${error?.response?.data?.message} 😔`,
          type: 'error'
        }));
      }

      setIsSubmitting(false);
    }

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: formSubmitHandler,
  });

  return (
    <div className="flex-1 ml-8 max-sm:ml-0 flex justify-center flex-col items-center gap-4 max-sm:w-full">
      <h1 className="text-5xl max-sm:text-4xl font-bold text-primary tracking-wide mb-12 max-sm:mb-6">Login</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 max-sm:w-full w-96">
        <TextFieldComponent name="email" label="Email id" type="email" error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />


        <TextFieldComponent name="password" label="Password" type="password" error={formik.errors.password && formik.touched.password ? true : false} helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ''} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={true} />



        {
          isSubmitting ? <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SwapVerticalCircleTwoTone />}
            variant="outlined"
            sx={{
              fontSize: '24px',
              letterSpacing: "1.2px",
              fontFamily: 'poppins'

            }}
          >
            Logging in
          </LoadingButton> : <Button disabled={isSubmitting ? true : false} type="submit" variant="contained" color="primary" sx={{
            borderRadius: "24px",
            fontSize: '24px',
            letterSpacing: "1.2px",
            '@media(max-width:640px)': {
              fontSize: '14px'
            }

          }}  >Login</Button>
        }
      </form>

      <Link to="" onClick={() => setForgotPasswordModal(true)} className="font-semibold text-text underline font-base">Forgot Password</Link>

      <p className="font-semibold text-lg text-primaryDark">OR</p>
      <button className="flex gap-4 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
        <img src={googleIcon} alt="google icon" width={20} height={20} />
        <span className='text-base font-roboto font-medium'>Continue with Google</span>
      </button>
      <p className="font-base">Don&apos;t have an account? <Link to="/auth/signup" className="font-semibold text-text underline">Sign up</Link></p>

      {forgotPasswordModal && <ForgotPasswordModal setModalState={setForgotPasswordModal} />}

    </div>
  )
}

export default LoginForm;