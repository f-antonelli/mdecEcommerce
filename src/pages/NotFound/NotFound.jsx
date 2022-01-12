import img404 from '../../assets/404/404.jpg'
import './NotFound.scss'

const NotFound = () => {
   return (
      <div className="container">
         <div className="text-404">
            <h2> 404 </h2>
            <p>No se encontro la pagina</p>
         </div>
         <div className="img-404">
            <img src={img404} alt="404" />
         </div>
      </div>
   )
}

export default NotFound
