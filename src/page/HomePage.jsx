import { useEffect, useState } from "react"
import PropertyCard from "../components/PropertyCard";
import PropertiesApis from "../services/api/properties";
import HeroContainer from "../container/HeroContainer";
import Whycontainer from "../container/Whycontainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from "@mui/material";
import TestimonialContainer from "../container/TestimonialContainer";
import Footer from "../container/Footer";
import RevealAnimation from "../components/RevealAnimation";

const propertyFetch = new PropertiesApis();

const HomePage = () => {

  const [propertiesData, setPropertiesData] = useState([]);
  const [slides, setSlides] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const getProperties = async () => {

      try {
        const result = await propertyFetch.getAllProperties('limit=10');

        console.log(result);
        setPropertiesData(result.data.properties);
      } catch (err) {
        console.log(err);
      }
    }

    const handleSliderSize = () => {
      if (window.innerWidth < 740) {
        setSlides(1);
      } else if (window.innerWidth < 1100) {
        setSlides(2);
      } else if (window.innerWidth < 1700) {
        setSlides(3);
      }
      else {
        setSlides(4)
      }
    };

    handleSliderSize();

    const resizeEvent = window.addEventListener("resize", handleSliderSize);

    getProperties();

    return () => resizeEvent;
  }, []);

  return (
    <main>
      <HeroContainer />
      <Whycontainer />

      <section className='mt-32 '>
        <div className="flex flex-col items-center">
          <RevealAnimation>
            <h2 className='text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-text text-center leading-snug'>We Help You <br /> To Make Better Deals</h2>
          </RevealAnimation>
          <RevealAnimation>

            <p className='text-lg max-sm:text-base text-[#898989] mt-8 max-w-2xl  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam porro labore quidem iste? Dolorum est neque, praesentium at provident illo dolor harum perspiciatis iste nobis dignissimos aliquam recusandae odit.</p>
          </RevealAnimation>
        </div>
        <div className="flex justify-center mt-16">
          <Swiper
            slidesPerView={slides}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            grabCursor
            centeredSlides={false}
            effect="fade"
          >
            {propertiesData.map((property) => {
              return (
                <SwiperSlide key={property._id} className="swiper-slide" tag="div">
                  <PropertyCard name={property.name} price={property.price} img={property.images[0]} location={property.location} area={property.area} onClick={() => {
                  navigate(`/properties/${property._id}`)
                }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex justify-center">

         <RevealAnimation>
         <Button variant="contained" color="primary" onClick={()=>navigate("/properties")} sx={{
            borderRadius: '24px',
            '@media (max-width: 1024px)': {
              fontSize: '16px',
            },
            '@media (max-width: 640px)': {
              fontSize: '14px',
            },
            fontSize: '18px',
            letterSpacing: "1.2px",
            fontFamily: 'poppins',
            textTransform: "capitalize",


          }}  >Load More ...</Button>
         </RevealAnimation>
        </div>
      </section>

      <TestimonialContainer />
      
    </main>
  )
}

export default HomePage