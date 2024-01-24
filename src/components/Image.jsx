import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage,lazyload,accessibility, responsive,} from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  }
}); 

const Image = ({ src, alt,className }) => {
  console.log(src);
  // http://res.cloudinary.com/dhaboeimw/image/upload/v1704973812/qyy2q6ivx6y63yma4ai8.jpg
  const srcArray = src.split('/');
  console.log(srcArray);
  const publicId = srcArray[srcArray.length-1].split('.')[0];
  console.log(publicId)
  const myImage = cld.image(publicId);
  const optimizedImageUrl = src.replace("upload/", "upload/q_auto:low/f_auto/c_fill,g_auto/c_scale,w_auto/dpr_auto/");
  return (
    // <img src={optimizedImageUrl} alt={alt}  className={`${className}`} />
    <AdvancedImage cldImg={myImage.format('auto').quality('auto')} className={`${className}`} plugins={[responsive(),lazyload()]} />
  )
}

export default Image