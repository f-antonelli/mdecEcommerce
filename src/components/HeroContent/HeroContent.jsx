import { Link } from 'react-router-dom'
import './HeroContent.scss'

const HeroContent = () => {
   return (
      <div className="container-hero">
         <div className="herocontent">
            <h2>High-Quality Furniture Just For You</h2>
            <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <Link to='/products'>Shop Now</Link>
         </div>
      </div>
   )
}

export default HeroContent
