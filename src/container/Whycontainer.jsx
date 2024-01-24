import { ArrowForwardIosRounded, DiscountOutlined, HomeOutlined, KeyboardArrowRight, PaymentsOutlined, ShieldOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import CardType1 from '../components/ui/CardType1'
import RevealAnimation from '../components/RevealAnimation'

const Whycontainer = () => {
  return (
    <section className='py-4 px-16 max-sm:px-6 flex w-full justify-center gap-8 max-xl:gap-16 max-sm:gap-8 items-center max-xl:flex-col'>
      <div className='flex-1'>
        <RevealAnimation><h2 className='text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-text max-xl:text-center'>Why Choose Us</h2></RevealAnimation>
        <RevealAnimation>
          <p className='text-lg max-sm:text-base text-subtext mt-10 max-sm:mt-8 max-w-xl max-xl:max-w-full'>we pride ourselves on being your reliable partner in the quest for your dream property. What sets us apart is our commitment to providing a diverse array of properties tailored to your unique preferences. With our user-friendly platform, you can effortlessly explore listings, view stunning images, and access crucial details with ease. The direct connection we facilitate between you and trusted dealers ensures transparent and prompt communication, empowering you to make informed decisions. Our personalized recommendations, transparent information, and efficient customer support further elevate your experience. </p>
          <p className='text-lg max-sm:text-base text-[#898989] mt-8 max-w-xl max-xl:max-w-full'>Choose SkylineSeek for a streamlined, transparent, and enjoyable property search, where your dream home is just a click away.</p>
        </RevealAnimation>
      </div>
      <div className='flex-1 justify-center items-center why-card-section ' >
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]' >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><HomeOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>01. Property Insurance</h3>
            <p className='text-sm text-[#898989] '>we understand the importance of securing your valuable assets, and that's why we offer comprehensive property insurance solutions.</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className="bg-[#004eff] flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]" >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#4e84fe] '><DiscountOutlined fontSize='large' sx={{ color: "#fff" }} /></span>

            <h3 className='text-white text-lg font-semibold '>02. Tax Advancement</h3>
            <p className='text-sm text-white '>Our tailored tax advancement services are designed to empower you to navigate the complex landscape of tax regulations while optimizing your benefits.</p>
          </div>
          <Link to="#" className='text-white font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]' >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><PaymentsOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>03. Lowest Commision</h3>
            <p className='text-sm text-[#898989] '>we take pride in offering the lowest commission rates to ensure you get the most value from your property transactions.</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]'  >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><ShieldOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>04. Most Trusted Service</h3>
            <p className='text-sm text-[#898989] '>Our commitment to being the most trusted service provider in the industry is rooted in transparency, reliability, and unwavering dedication to your satisfaction.</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>


      </div>
    </section>
  )
}

export default Whycontainer