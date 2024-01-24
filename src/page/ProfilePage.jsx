import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from "formik";
import TextFieldComponent from '../components/TextField';
import UploadWidget from '../components/UploadWidget';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';
import { updateFormSchema } from '../utils/FormSchema';
import axios from 'axios';
import { notificationActions } from '../store/notificationSlice';
import PropertyListings from '../container/PropertyListings';
import PropertyLists from '../container/PropertyLists';
import CardType1 from '../components/ui/CardType1';
import ProfileApis from '../services/api/Profile';

const profile = new ProfileApis();


const ProfilePage = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const { imageUrl: profileImg, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const authState = useLoaderData();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: '',
    email: "",
    imageUrl: ""
  });

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {

        if (!authState) {
          dispatch(authActions.logout());
          navigate("/auth/login");
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/userdata/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
          withCredentials: true
        });

        setUserInfo(response.data.user);
      } catch (err) {
        console.log(err);
        dispatch(notificationActions.notify({
          type: "error",
          message: err.message,
        }))
        navigate('/auth/login');
      }

    };


    fetchUserProfileData();

  }, []);

  useEffect(() => {
    // Initialize formik values after userInfo is set
    formik.setValues({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
    });
  }, [userInfo]);



  const updateFormSubmitHandler = async (values) => {
    console.log(values);
    try {

       await profile.updateProfile(accessToken,values);

      dispatch(notificationActions.notify({
        type: "success",
        message: "User is updated successfully 😜"
      }))

    } catch (err) {
      dispatch(notificationActions.notify({
        type: "error",
        message: err.message,
      }))
    }
  };


  const formik = useFormik({
    initialValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
    },
    onSubmit: updateFormSubmitHandler,
    validationSchema: updateFormSchema,

  });


  return (
    <section className='pt-32 pb-12 px-4 flex flex-col gap-24 max-sm:gap-16 items-center'>
      <div className='flex items-center justify-center gap-60 max-xl:gap-28 max-lg:flex-col max-lg:items-center max-lg:gap-16 max-sm:gap-8 max-sm:w-full'>
        <div className='flex flex-col items-center gap-6 max-sm:gap-4 max-lg:flex-shrink-0'>
          <div className='w-40 max-md:w-32 h-40 max-md:h-32  overflow-hidden rounded-full' ><img src={profileImg} alt="Profile Picture" className='relative w-full h-full object-cover object-center' /></div>

          <p className='text-2xl font-semibold font-Poppins'>{userInfo.firstName + " " + userInfo.lastName}</p>
          <UploadWidget />

        </div>
        <CardType1 className=" max-sm:w-[100%]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 ">
            <div className="flex gap-12  w-full max-sm:flex-col max-sm:gap-6">
              <TextFieldComponent name="firstName" label="FirstName" type="text" error={formik.errors.firstName && formik.touched.firstName ? true : false} helperText={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ''} value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />


              <TextFieldComponent name="lastName" label="Last Name" type="text" error={formik.errors.lastName && formik.touched.lastName ? true : false} helperText={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : ''} value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={false} isPassword={false} />

            </div>
            <TextFieldComponent name="email" label="Email id" type="email" error={formik.errors.email && formik.touched.email ? true : false} helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />

            <div className='flex justify-center mt-4'>
              <Button type="submit" variant="contained" color="primary" sx={{
                fontSize: '16px',
                letterSpacing: "1.2px",
                width: '200px',
                '@media(max-width:640px)': {
                  fontSize: '14px'
                }
              }}>Update</Button>
            </div>
          </form>


        </CardType1>

      </div>

      <PropertyListings />


      <PropertyLists />

    </section>
  )
}

export default ProfilePage;

