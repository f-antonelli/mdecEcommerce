import './Feature.scss'
import trophy from '../../assets/feature/trophy1.svg';
import guarante from '../../assets/feature/guarantee.svg';
import shipping from '../../assets/feature/shipping.svg';
import support from '../../assets/feature/customer-support.svg';

const Feature = () => {
   return (
      <div className="container-feature">
         <div className="feature-item">
            <div className="img">
               <img src={trophy} alt="trophy" />
            </div>
            <div className="content">
               <h5>High Quality</h5>
               <p>crafted from top materials</p>
            </div>
         </div>
         <div className="feature-item">
            <div className="img">
               <img src={guarante} alt="guarante" />
            </div>
            <div className="content">
               <h5>Warrany Protection</h5>
               <p>Over 2 years</p>
            </div>
         </div>
         <div className="feature-item">
            <div className="img">
               <img src={shipping} alt="shipping" />
            </div>
            <div className="content">
               <h5>Free Shipping</h5>
               <p>Order over 150 $</p>
            </div>
         </div>
         <div className="feature-item">
            <div className="img">
               <img src={support} alt="support" />
            </div>
            <div className="content">
               <h5>24 / 7 Support</h5>
               <p>Dedicated support</p>
            </div>
         </div>
         
      </div>
   )
}

export default Feature
