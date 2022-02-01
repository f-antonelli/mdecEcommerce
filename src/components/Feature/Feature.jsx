import { features } from './featureItems'
import './Feature.scss'

const Feature = () => {
   return (
      <div className="container-feature">
         {
            features.map(item => (
               <div className="feature-item">
                  <div className="img">
                     <img src={item.img} alt={item.name} />
                  </div>
                  <div className="content">
                     <h5>{item.name}</h5>
                     <p>{item.description}</p>
                  </div>
               </div>
            ))
         }
      </div>
   )
}

export default Feature
