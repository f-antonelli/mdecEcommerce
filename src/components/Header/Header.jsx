import Banner from '../Banner/Banner'
import HeroContent from '../HeroContent/HeroContent'
import './Header.scss'

const Header = () => {
   return (
      <div className="container-header">
         <Banner />
         <HeroContent />
      </div>
   )
}

export default Header
