import { useState } from "react"
import { sliderItems } from "../../data.js"
import BtnSlider from "./BtnSlider.jsx"
import './Slider.scss'

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(1)

   const nextSlide = () => {
      console.log('hi')
      if (slideIndex !== sliderItems.length) {
         setSlideIndex(slideIndex + 1);
      } else if (slideIndex === sliderItems.length) {
         setSlideIndex(1);
      }
   }
   const prevSlide = () => {
      
   }

   return(
      <div className="container-slider">        
         {
            sliderItems.map( (item, index) => {
               return (
                  <div className={slideIndex === index + 1 ? 'slide active' : 'slide'} key={item.id}>
                     <img src={item.img} alt="" />
                  </div>
               )
            })
         }
         <BtnSlider moveSlide={nextSlide} direction={'next'} onClick={() => {nextSlide();}}/>
         <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      </div>
   )
}

export default Slider
