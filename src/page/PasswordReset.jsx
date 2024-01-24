import { useState } from 'react'
import TextFieldComponent from '../components/TextField';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { SwapVerticalCircleTwoTone } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Button, Snackbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../store/notificationSlice';
import AuthenticationApis from '../services/api/Authentication';

const authenticate = new AuthenticationApis();

const confirmPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one -> Uppercase letter, Lowercase letter, Special character,\n number"
    )
    .required("required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords are not matched!")
    .required("required"),
});

const PasswordReset = () => {


  const [isSubmitting, setIsSubmitting] = useState(false);
  const { resetToken } = useParams();
  const dispatch = useDispatch();


  const { open, message, type } = useSelector((state) => state.notification);

  const snackBarCloseHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(notificationActions.closeSnackbar());
  }

  const resetFormSubmitHandler = async (values) => {
console.log(values);
    try {
      setIsSubmitting(true);
      const response = await authenticate.resetPassword(resetToken,values);
      console.log(response);

      dispatch(notificationActions.notify({
        message: `${response.data.message}`,
        type: 'success'
      }));

    } catch (error) {
      console.log(error);
      dispatch(notificationActions.notify({
        message: `${error?.response?.data?.message} 😔`,
        type: 'error'
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      passwordConfirm: "",
    },
    validationSchema: confirmPasswordSchema,
    onSubmit: resetFormSubmitHandler,
  })

  return (
    <main className='w-screen p-12 flex justify-center flex-col items-center gap-16  '>
      <h1 className='text-6xl font-semibold text-primaryDark'>Reset Password</h1>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 max-sm:w-full w-[500px] bg-secondaryLight p-12 rounded-lg'>


        <TextFieldComponent name="newPassword" label="New Password" type="password" error={formik.errors.newPassword && formik.touched.newPassword ? true : false} helperText={formik.errors.newPassword && formik.touched.newPassword ? formik.errors.newPassword : ''} value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={true} />


        <TextFieldComponent name="passwordConfirm" label="Confirm Password" type="password" error={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? true : false} helperText={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? formik.errors.passwordConfirm : ''} value={formik.values.passwordConfirm} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={true} />

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
            Resetting
          </LoadingButton> : <Button disabled={isSubmitting ? true : false} type="submit" variant="contained" color="primary" sx={{
            backgroundColor: "#3E5AAF",
            fontSize: '24px',
            letterSpacing: "1.2px",
            fontFamily: 'poppins'

          }}  >Reset</Button>
        }
      </form>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        message={message}
        anchorOrigin={{ "horizontal": "right", "vertical": "bottom" }}
        onClose={snackBarCloseHandler}
      >
        <Alert severity={type || "success"} onClose={snackBarCloseHandler}>{message}</Alert>
      </Snackbar>
    </main>
  )
}

export default PasswordReset