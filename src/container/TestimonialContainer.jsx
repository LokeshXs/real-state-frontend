import RevealAnimation from "../components/RevealAnimation"
import CardType2 from "../components/ui/CardType2"


const TestimonialContainer = () => {
  return (
    <section className='mt-32 px-4'>
       <div className="flex flex-col items-center">
         <RevealAnimation>
         <h2 className='text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-text text-center leading-snug'>Client Reviews</h2>
         </RevealAnimation>
         <RevealAnimation>

          <p className='text-lg max-sm:text-base text-[#898989] mt-8 max-w-2xl  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam porro labore quidem iste? Dolorum est neque, praesentium at provident illo dolor harum perspiciatis iste nobis dignissimos aliquam recusandae odit.</p>
         </RevealAnimation>
        </div>

        <div className="w-full flex justify-center gap-20 mt-20 mb-28 max-lg:flex-col max-lg:items-center max-lg:gap-28 ">
          <RevealAnimation>
          <CardType2 className="reative min-w-[300px] max-w-[600px] flex flex-col items-center gap-8 max-sm:gap-6 py-12 max-xl:py-6">
            <div className="relative w-32 h-32 max-xl:w-24 max-xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full overflow-hidden -mt-16">
            <img src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300" alt="profile image" className="object-cover object-center w-full h-full" />
            </div>

            <div className="w-full flex justify-between  text-base font-medium">
              <div className="text-lg max-sm:text-base">
                Lokesh Singh <br />
                <span className="text-subtext text-base max-sm:text-sm">Software Engineer</span>
              </div>

              <div className="text-subtext max-sm:text-sm">⭐ 4.5 / 5</div>
            </div>

           <div className="flex justify-start w-full ">
           <p className="max-w-[90%] text-gray-600 max-sm:text-sm max-sm:max-w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, Lorem ipsum dolor, sit amet consectetur adipisicing eli</p>
           </div>

            
          </CardType2>
          </RevealAnimation>

          <RevealAnimation>

          
          <CardType2 className="reative min-w-[300px] max-w-[600px] flex flex-col items-center gap-8 max-sm:gap-6  py-12 max-xl:py-6">
            <div className="relative w-32 h-32 max-xl:w-24 max-xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full overflow-hidden -mt-16">
            <img src="https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div className="w-full flex justify-between  text-base font-medium">
              <div className="text-lg max-sm:text-base">
                Khushi singh<br />
                <span className="text-subtext text-base max-sm:text-sm">BBQ Restaurant Owner</span>
              </div>

              <div className="text-subtext max-sm:text-sm">⭐ 4.8 / 5</div>
            </div>

           <div className="flex justify-start w-full ">
           <p className="max-w-[90%] text-gray-600 max-sm:text-sm max-sm:max-w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, Lorem ipsum dolor, sit amet consectetur adipisicing eli</p>
           </div>

            
          </CardType2>
          </RevealAnimation>
          
        </div>
    </section>
  )
}

export default TestimonialContainer