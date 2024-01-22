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
          <p className='text-lg max-sm:text-base text-subtext mt-10 max-sm:mt-8 max-w-xl max-xl:max-w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos consectetur vel libero odio, esse deleniti corrupti eaque, tenetur nemo veritatis omnis nisi ipsam delectus, expedita impedit minus blanditiis officia et! Placeat omnis facilis asperiores quis, tempora nisi dolor autem, possimus facere nihil commodi maiores, nesciunt accusantium blanditiis vel laborum numquam ipsam natus ea quibusdam praesentium. Deserunt expedita ullam officiis enim!</p>
          <p className='text-lg max-sm:text-base text-[#898989] mt-8 max-w-xl max-xl:max-w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam porro labore quidem iste? Dolorum est neque, praesentium at provident illo dolor harum perspiciatis iste nobis dignissimos aliquam recusandae odit.</p>
        </RevealAnimation>
      </div>
      <div className='flex-1 justify-center items-center why-card-section ' >
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]' >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><HomeOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>01. Property Insurance</h3>
            <p className='text-sm text-[#898989] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus accusamus enim rem voluptates provident neque corporis saepe maiores molestiae nesciunt aut aperiam quam voluptatibus ipsa magnam, obcaecati vel? Pariatur!</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className="bg-[#004eff] flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]" >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#4e84fe] '><DiscountOutlined fontSize='large' sx={{ color: "#fff" }} /></span>

            <h3 className='text-white text-lg font-semibold '>02. Tax Advancement</h3>
            <p className='text-sm text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, assumenda.</p>
          </div>
          <Link to="#" className='text-white font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]' >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><PaymentsOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>03. Lowest Commision</h3>
            <p className='text-sm text-[#898989] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, assumenda.</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>
        <CardType1 className='flex flex-col justify-between items-start h-full w-full gap-8 min-h-[360px] max-sm:min-h-[300px]'  >

          <div className='flex flex-col items-start gap-4'>
            <span className='p-4 rounded-xl bg-[#ecf1fe] '><ShieldOutlined fontSize='large' color='primary' /></span>

            <h3 className='text-[#353e61] text-lg font-semibold '>04. Most Trusted Service</h3>
            <p className='text-sm text-[#898989] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, assumenda.0</p>
          </div>
          <Link to="#" className='text-[#004eff] font-semibold'>Read More <KeyboardArrowRight fontSize='small' /> </Link>

        </CardType1>


      </div>
    </section>
  )
}

export default Whycontainer