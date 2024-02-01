import { Avatar, Button, IconButton, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import { Search, MenuOpen, Close } from '@mui/icons-material'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../store/authSlice';
import { notificationActions } from '../store/notificationSlice';
import axios from "axios";
const NavBar = () => {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const { email, id,imageUrl: profileImg, } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsNavBarOpen(false);
    setAnchorEl(null);
  };

  const logoutHandler = async () => {

    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/auth/logout`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      console.log(response);
      handleClose();
      dispatch(authActions.logout());
      dispatch(notificationActions.notify({
        type: 'success',
        message: 'Successfully logged out 🫰',
      }))
    } catch (err) {
      console.log(err);
      dispatch(notificationActions.notify({
        type: 'error',
        message: `${err.response.data.message} 😔`,
      }))
    } finally {
      navigate("/");
    }

  }


  const profileHandler = () => {
    handleClose();
    navigate(`/profile/${id}`)
  }

  return (
    <header className=' px-16 py-4 max-lg:px-4 max-lg:py-2 max-sm:px-1 absolute z-[30] w-full   '>
      <nav className='relative  px-8 py-4 rounded-xl flex justify-between  items-center max-md:flex-row-reverse max-sm:px-4 max-sm:py-2 bg-primary'>


        <div className='hidden max-md:block'>
          <IconButton className='z-40' onClick={() => {
            setIsNavBarOpen((prev) => !prev)
          }} >
            {
              isNavBarOpen ?
                <Close fontSize='large' className='text-textVeryLight' />
                : <MenuOpen fontSize='large' className='text-textVeryLight' />
            }

          </IconButton>
        </div>





        <p className='text-5xl font-bold text-textVeryLight tracking-wider max-xl:text-4xl max-sm:text-2xl'>Rental</p>

      


        <ul className='relative flex gap-8 items-center justify-center max-md:hidden '>
        <li className='text-textVeryLight font-semibold text-2xl max-xl:text-xl'><Link to="/">Home</Link></li>
          <li className='text-textVeryLight font-semibold text-2xl max-xl:text-xl'><Link to="/properties">Browse</Link></li>
          <li className='text-textVeryLight font-semibold text-2xl max-xl:text-xl'>{email ? <div>
            <Button onClick={handleClick}><Avatar src={profileImg} /></Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={profileHandler}>Profile</MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
          </div> : <Link to="/auth/login" className='rounded-xl px-6 py-2 bg-white text-primary'>login</Link>}</li>
        </ul>


        {/* Mobile Slider NavBar */}
        <div className={`fixed z-[30] w-8/12 h-screen top-0 right-0 bg-primary transition-all duration-300  ${isNavBarOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>

          <div className='mt-24 p-8'>
            <motion.ul
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3, // Delay between each li element
                  },
                },
              }}
              initial="hidden"
              animate={isNavBarOpen ? "visible" : ""}
              exit="hidden"
            >
              <li className='mt-8'>
                {email ? <Button onClick={handleClick}><Avatar src={profileImg} /></Button> : <Link to="/auth/login" className='font-montserrat leading-normal text-3xl text-white font-bold ' onClick={() => { setIsNavBarOpen(false) }} >
                  Login
                </Link>}
              </li>

              <motion.li
                className='mt-8'
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Adjust the duration as needed
                }}
              >
                <Link to="/" className='font-montserrat leading-normal text-3xl text-white font-bold' onClick={() => { setIsNavBarOpen(false) }}>
                  Home
                </Link>
              </motion.li>
              {/* <motion.li
                className='mt-8'
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Adjust the duration as needed
                }}
              >
                <Link to="/about" className='font-montserrat leading-normal text-3xl text-white font-bold' onClick={() => { setIsNavBarOpen(false) }}>
                  About
                </Link>
              </motion.li> */}
              <motion.li
                className='mt-8'
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Adjust the duration as needed
                }}
              >
                <Link to="/properties" className='font-montserrat leading-normal text-3xl text-white font-bold' onClick={() => { setIsNavBarOpen(false) }}>
                  Browse
                </Link>
              </motion.li>

            </motion.ul>
          </div>

        </div>

        <div className={`fixed top-0 left-0 z-20 backdrop-blur-sm h-screen w-screen ${isNavBarOpen ? 'block ' : 'hidden '} `} onClick={() => { setIsNavBarOpen((prev) => !prev) }} />





      </nav>
    </header>
  )
}

export default NavBar