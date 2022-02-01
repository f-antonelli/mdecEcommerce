import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Slider.scss'

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
   const slides = [];

   for (let i = 1; i < 4; i++) {
      slides.push(
         <SwiperSlide key={`slide-${i}`} tag="li">
            <img src={`../../assets/banner/banner${i}.jpg`} alt=''></img>
         </SwiperSlide>
      )
   }
   return(
   <>
      <Swiper 
         tag='section' 
         wrapperTag="ul" 
         id='main' 
         navigation 
         pagination
         spaceBetween={0}
         slidesPerView={1}
      >
         {slides}
      </Swiper>
   </>
   )
}

export default Slider
