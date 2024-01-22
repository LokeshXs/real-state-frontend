import { Skeleton } from '@mui/material'
import React from 'react'

const CardSkeleton = () => {
  return (
    <div className=' w-[300px]'>
      <Skeleton variant="rectangular" width={300} height={280} />
      <div className='flex justify-between'>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={120} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={80} />
      </div>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={80} />
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={80} />
    </div>
  )
}

export default CardSkeleton