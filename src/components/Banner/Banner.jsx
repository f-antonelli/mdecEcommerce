import './Banner.scss'
import img2 from '../../assets/banner/banner2.png';
import img4 from '../../assets/banner/banner4.jpg';
import img5 from '../../assets/banner/banner5.jpg';


const Banner = () => {
   return (
      <div className="container-gridbanner">
         <div className="grid-item">
            <img src={img4} alt="" />
         </div>
         <div className="grid-item">
            <img src={img2} alt="" />
         </div>
         <div className="grid-item">
            <img src={img5} alt="" />
         </div>
      </div>
   )
}

export default Banner
