import Banner from '../Banner/Banner'
import HeroContent from '../HeroContent/HeroContent'
import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header = () => {
   return (
      <div className="container-header">
         <div className="bg-color"></div>
         <NavBar />
         <Banner />
         <HeroContent />
      </div>
   )
}

export default Header
