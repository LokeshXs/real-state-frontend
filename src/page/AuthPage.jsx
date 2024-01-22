import { Outlet } from "react-router-dom";
import HouseImg from "../assets/authFormImg.jpg";
import ErrorBoundary from "../utils/ErrorBoundary";
import CardType1 from "../components/ui/CardType1";

const AuthPage = () => {

  return (
    <section className='relative  pt-32 pb-12  w-screen px-40 max-2xl:px-20 max-xl:px-10 max-sm:px-4'>

      <CardType1 className="flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-12" >
        <img src={HouseImg} alt="House" className="relative h-[660px] max-lg:h-[400px] max-sm:h-[300px] w-[500px] max-lg:w-full object-cover object-center rounded-xl max-2xl:w-[450px] max-2xl:h-[594px] max-xl:w-[350px]  " />

        <ErrorBoundary fallback="Error">
          <Outlet />
        </ErrorBoundary>
      </CardType1>

     
    </section>
  )
}

export default AuthPage