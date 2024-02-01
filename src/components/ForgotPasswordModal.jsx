import React, { useState } from 'react';
import Modal from './ui/Modal';
import TextFieldComponent from './TextField';
import { Button } from '@mui/material';
import { MarkEmailReadOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../store/notificationSlice';
import AuthenticationApis from '../services/api/Authentication';



const authentication = new AuthenticationApis();
const ForgotPasswordModal = ({ setModalState }) => {

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [blured, setBlured] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);



  const dispatch = useDispatch();
  const hasError = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);

  console.log(hasError);

  const submitForgotPasswordForm = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      const response = await authentication.forgotPassword(emailValue);
      console.log(response);

      setIsCardFlipped(true);
      dispatch(notificationActions.notify({
        message: `${response?.data?.message} 📨`,
        type: 'success'
      }));


    } catch (error) {
      console.log(error);
      dispatch(notificationActions.notify({
        message: `${error?.response?.data?.message} 😔`,
        type: 'error'
      }));
    }
  }


  const EmailSentModal = () => {
    return (

      <div className='h-80 w-[500px] py-4 px-8 flex flex-col items-center justify-center gap-8' >
        <div className='flex flex-col items-center gap-2'>
          <MarkEmailReadOutlined color='primary' sx={{ fontSize: "60px" }} />
          <h2 className=' text-primaryDark text-3xl font-semibold'>Check your email</h2>
        </div>
        <div className='w-full'>
          <p className=' text-base text-gray-600 text-center '>We’ve sent instructions on how to reset your </p>
          <p className=' text-base text-gray-600 text-center mt-1'> password to <span className='text-primaryDark font-semibold'>{emailValue}</span></p>

        </div>
      </div>

    )
  }

  return (
    // <EmailSentModal />
    <>
      <div className={`fixed z-30 top-1/2 right-1/2 translate-y-[-50%] translate-x-[50%] bg-white transition-all duration-300 rounded-xl opacity-1}`}>
        {isCardFlipped ? <EmailSentModal /> :
          <div className={`h-80 w-[500px] py-4 px-8 flex flex-col items-center justify-center gap-8 ${isCardFlipped ? 'hidden' : 'block'}`}  >
            <div>
              <h2 className=' text-primaryDark text-3xl font-semibold'>Forgot your password?</h2>
              <p className=' text-base text-gray-600 text-center mt-2'>Your password will be reset by email.</p>
            </div>
            <div className='w-full'>
              <form onSubmit={submitForgotPasswordForm}  >
                <TextFieldComponent type="email" name="forgotpassword" error={(!hasError && blured)} onBlur={() => setBlured(true)} helperText={(!hasError && blured) ? "incorrect email" : ""} value={emailValue} onChange={(e) => setEmailValue(e.target.value)} label="Email id" isRequired={true} sx={{ width: '100%' }} disabled={false} />

                <Button type='submit' variant='contained' className='w-full' sx={{ marginTop: '14px', textTransform: "capitalize", fontSize: "20px", letterSpacing: "1.2px", fontWeight: 400 }}>Next</Button>
              </form>

            </div>
          </div>

        }
      </div>
      <div className={`fixed top-0 left-0 z-20 bg-[#080a0c] backdrop-blur-md opacity-[0.8] h-screen w-screen block `} onClick={() => { setModalState(false) }} />
    </>
  )
}

export default ForgotPasswordModal