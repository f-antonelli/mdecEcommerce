import Slider from '../Slider/Slider'
import HeroContent from '../HeroContent/HeroContent'
import './Header.scss'

const Header = () => {
   return (
      <div className="container-header">
         <Slider />
         <HeroContent />
      </div>
   )
}

export default Header
