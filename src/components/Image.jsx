import React from 'react'

const Image = ({ src, alt,className }) => {

  const optimizedImageUrl = src.replace("upload/", "upload/q_auto:low/f_auto/c_fill,g_auto/c_scale,w_auto/dpr_auto/");
  return (
    <img src={optimizedImageUrl} alt={alt}  className={`${className}`} />
  )
}

export default Image