import React, { useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLoaderData } from 'react-router-dom';
import { authActions } from '../store/authSlice';



const AboutPage = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const authState = useLoaderData();
  console.log(authState);

  
  useEffect(() => {
    // const verifyUser = async () => {

    //   try {
    //     const response = await axiosPrivate.get("/api/v1/user/check-access", {
    //       headers: {
    //         "Authorization": `Bearer ${accessToken}`,
    //       }
    //     });
    //     console.log(response);

    //   } catch (error) {
    //     dispatch(authActions.logout());
    //     // navigate("/auth/login");
    //     console.log('Hi');
    //     console.log(error);
    //   }
    // };
    
    if (!authState) {
      dispatch(authActions.logout());
      navigate("/auth/login");
    }
  }, []);


  return (
    <div>
      {authState && <div>AboutPage</div>}

    </div>
  )
}

export default AboutPage;