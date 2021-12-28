import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import './Slider.scss'

const BtnSlider = ({ direction, moveSlide }) => {
   return (
         <button className='btn-slide' onClick={moveSlide}>
            {
               (direction === 'next') 
               ? <ArrowLeftOutlined className='btn-left' onClick={moveSlide}/> 
               : <ArrowRightOutlined className='btn-right' onClick={moveSlide}/>
            }
         </button>
   )
}
export default BtnSlider
