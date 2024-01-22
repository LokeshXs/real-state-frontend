import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useNavigate, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const PersistLogin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    !accessToken ? verifyRefreshToken() : setIsLoading(false);

  }, []);

  useEffect(() => {
    console.log(`Is Loading: ${isLoading}`);
    console.log(`Access Token: ${accessToken}`);
  }, [isLoading, accessToken])


  return (
    <>
      {!isLoading && <Outlet />}
    </>
  )

};

export default PersistLogin;
