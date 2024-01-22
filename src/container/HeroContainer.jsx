import bgVideo from "../assets/bg-video-hero.mp4";
import { Button, Fab } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";

const HeroContainer = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  const videoRef = useRef();



  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlay]);



  const toggleVideo = () => {
    setVideoPlay(prev => !prev);
  }


  return (
    <section className='relative h-[100vh] max-sm:h-[600px] w-full  overflow-hidden'>
      <div className='absolute w-full h-full z-20 flex items-center left-20 max-md:left-10 max-sm:left-2  '>
        <div>
          <motion.h1 className='text-6xl max-lg:text-5xl max-sm:text-4xl text-white drop-shadow-xl font-semibold leading-tight' initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>Trusted Real Estate <br />Property For You</motion.h1>
          <motion.p className='text-white max-w-lg max-sm:max-w-sm  text-base max-sm:text-sm pr-2  mt-4 drop-shadow-xl ' initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro inventore cupiditate odit et sit iure, nulla numquam, voluptates doloremque ut enim nemo facere minima repudiandae iste, ad aperiam necessitatibus?</motion.p>

          <motion.div className='mt-10 flex gap-8 items-center' initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}}>
            <Button variant="contained" color="primary" sx={{
              borderRadius:'24px',
              '@media (max-width: 1024px)': {
                fontSize: '16px',
              },
              '@media (max-width: 640px)': {
                fontSize: '14px',
              },
              fontSize: '18px',
              letterSpacing: "1.2px",
              fontFamily: 'poppins',
              textTransform: "capitalize",

            }}  >Contact Us</Button>

            <div className='flex items-center gap-4'><Fab color="secondary" aria-label="play" size='small' onClick={toggleVideo} >
              {videoPlay?<Pause color='primary' fontSize="small" />:<PlayArrow color='primary' fontSize="small" />}
            </Fab > <span className='text-white text-base max-sm:text-sm drop-shadow-xl'>Watch Video</span></div>
          </motion.div>

        </div>
      </div>

      <div className='absolute w-full h-full z-9'>


        <div className='absolute w-full h-full bg-gradient-to-r from-black to-#5A81FA opacity-[0.4]'></div>
        <video src={bgVideo} type="video/mp4" ref={videoRef} loop muted playsInline className="object-cover object-center h-full w-full"  />

      </div>

      <div className="custom-shape-divider-bottom-1704103109">

        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>


        </svg>
      </div>
    </section>
  )
}

export default HeroContainer