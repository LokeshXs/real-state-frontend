import { Button } from "@mui/material";
import googleIcon from "../assets/google.png";
import { useFormik } from "formik";
import { SignupSchema } from "../utils/FormSchema";
import TextFieldComponent from "../components/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notificationActions } from "../store/notificationSlice";


const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    console.log(values);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/signup`, values);



      dispatch(notificationActions.notify({
        message: `${response.data.message} 😎`,
        type: 'success'
      }));
      navigate("/auth/login");


    } catch (error) {
      console.log(error);
      dispatch(notificationActions.notify({
        message: `${error.response.data.message} 😔`,
        type: 'error'
      }));
    }

  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ""
    },
    validationSchema: SignupSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="flex-1 ml-8 max-sm:ml-0 flex justify-center flex-col items-center gap-4 max-sm:w-full">
      <h1 className="text-5xl max-sm:text-4xl font-bold text-primary tracking-wide mb-12 max-sm:mb-6">Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 max-sm:w-full">
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-6">
          <TextFieldComponent name="firstName" label="FirstName" type="text" error={formik.errors.firstName && formik.touched.firstName ? true : false} helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ''} value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />


          <TextFieldComponent name="lastName" label="Last Name" type="text" error={formik.errors.lastName && formik.touched.lastName ? true : false} helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : ''} value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={false} isPassword={false} />

        </div>
        <TextFieldComponent name="email" label="Email id" type="email" error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />


        <TextFieldComponent name="password" label="Password" type="password" error={formik.errors.password && formik.touched.password ? true : false} helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ''} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={true} />


        <TextFieldComponent name="passwordConfirm" label="Confirm Password" type="password" error={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? true : false} helperText={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? formik.errors.passwordConfirm : ''} value={formik.values.passwordConfirm} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={true} />


        <Button type="submit" variant="contained" color="primary" sx={{
          borderRadius:'24px',
          fontSize: '24px',
          letterSpacing: "1.2px",
          '@media(max-width:640px)': {
            fontSize: '14px'
          }

        }}>Sign Up</Button>
      </form>

      <p className="font-semibold text-lg text-primaryDark">OR</p>
      <button className="flex gap-4 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
        <img src={googleIcon} alt="google icon" width={20} height={20} />
        <span className='text-base font-roboto font-medium'>Continue with Google</span>
      </button>
      <p className="font-base">Have an account? <Link to="/auth/login" className="font-semibold text-text underline">Login</Link></p>
    </div>
  )
}

export default SignUpForm