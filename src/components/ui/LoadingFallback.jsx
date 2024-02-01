import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingFallback = () => {
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
      <CircularProgress />
    </div>
  )
}

export default LoadingFallback