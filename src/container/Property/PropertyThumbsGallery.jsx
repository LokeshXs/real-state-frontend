
import  { useState } from 'react'
import "./thumbGallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from '../../components/Image';



const PropertyThumbsGallery = ({images}) => {
  console.log(images);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className=' relative h-[500px] max-xl:h-[400px] max-sm:h-[300px]'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 w-full h-full "
        >

          {images.map((item, index) => {
            return  <SwiperSlide key={index}>
           <Image src={item} alt="Property Image" />
         
          </SwiperSlide>
          })}

        </Swiper>


      </div>


      <div className=' h-[80px] max-sm:h-[60px]'>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}

          className="mySwiperGallery"
        >

          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item} alt="Property Image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </>
  )
}

export default PropertyThumbsGallery