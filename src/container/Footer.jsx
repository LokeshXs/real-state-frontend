import React from 'react'
import { FacebookRounded, KeyboardArrowRight, Twitter, YouTube } from '@mui/icons-material'
import RevealAnimation from '../components/RevealAnimation';
import { Link } from 'react-router-dom';


const pagesLinks = [
  {
    title:'Home',
    link:'/'
  },
  {
    title:'Browse',
    link:'/properties'
  }
];

const Footer = () => {
  return (
    <footer className='relative bg-primary  h-[600px] max-xl:h-[500px] max-sm:h-auto'>
      <div className="custom-shape-divider-top-1704274109">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>


      <div className='flex justify-between px-16 max-xl:px-8 max-sm:px-4 pt-[200px] max-md:pt-[150px]  max-sm:pt-[100px] max-sm:flex-col max-sm:gap-16 py-4 '>
        <RevealAnimation>
          <div >
            <h3 className='text-5xl font-bold text-textVeryLight tracking-wider max-xl:text-4xl max-sm:text-3xl'>Rental</h3>
            <div className='mt-8 max-sm:mt-6'>
              <h4 className='text-3xl font-semibold text-textVeryLight tracking-wide max-xl:text-2xl max-sm:text-lg '>For Contact</h4>
              <div className='text-base max-sm:text-sm text-secondary mt-4 flex flex-col gap-1'>
                <p>Address: 497 Evergreen</p>
                <p>Phone: +91 9334535632</p>
                <p>Email: rental123@gmail.com</p>
              </div>

              <div className='mt-8'>
                <h5 className='text-lg font-semibold text-white max-sm:text-base'>Follow Us On :</h5>
                <div className='text-white flex gap-4 mt-2'>
                  <FacebookRounded fontSize='large' />
                  <Twitter fontSize='large' />
                  <YouTube fontSize='large' />
                </div>
              </div>
            </div>

          </div>
        </RevealAnimation>
        <div className='flex justify-center  gap-32 max-xl:gap-24 max-md:gap-12 max-sm:flex-col max-sm:gap-6  '>
        


          <RevealAnimation>
            <div>
              <h3 className='text-2xl font-semibold text-white max-sm:text-lg '>Pages</h3>
              <ul className='mt-6 max-sm:mt-4'>
                {pagesLinks.map((link, index) => (
                  <Link key={index} to={link.link} >
                  <li className='text-white mt-2 max-sm:text-sm'><KeyboardArrowRight /> {link.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  )
}

export default Footer