import { Outlet } from 'react-router-dom'
import NavBar from '../container/NavBar'
import { Alert, Snackbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { notificationActions } from '../store/notificationSlice'
import Footer from '../container/Footer'


// **************************************************
const HomeRootLayout = () => {
  


  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.notification);

  const snackBarCloseHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(notificationActions.closeSnackbar());
  }

  return (
    <>
      <NavBar />
      <main className='relative'>
       
        <Outlet />

        <Snackbar
          open={open}
          autoHideDuration={5000}
          message={message}
          anchorOrigin={{ "horizontal": "right", "vertical": "bottom" }}
          onClose={snackBarCloseHandler}
        >
          <Alert severity={type || "success"} onClose={snackBarCloseHandler}>{message}</Alert>
        </Snackbar>
        <Footer />

      </main>
    </>
  )
}

export default HomeRootLayout