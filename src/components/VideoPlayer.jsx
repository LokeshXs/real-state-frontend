
import { useEffect, useRef } from 'react'

const VideoPlayer = (props) => {
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinary
    cloudinaryRef.current.videoPlayer('home-video',{
      cloudName:import.meta.env.VITE_CLOUD_NAME,
      sourceTypes: ['hls','dash','webm/vp9','mp4/h265','mp4'],
    
      
    });
  }, [])
  return (
    <video id="home-video"   data-cld-public-id="bg-video-hero_wxyvt8" {...props} className='cld-video-player ' muted autoPlay />
  )
}

export default VideoPlayer