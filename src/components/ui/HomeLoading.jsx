import { LinearProgress } from '@mui/material'
import style from "./HomeLoading.module.css";

const HomeLoading = () => {
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
      <div className={style["loader"]}>
        <span className=' text-7xl font-semibold'>Aashiyana</span>
        <span className=' text-7xl font-semibold'>Aashiyana</span>
      </div>
    </div>
  )
}

export default HomeLoading