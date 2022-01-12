import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
   return (
      <footer className='footer'>
         <div className="footer__box first">
            <h4>mdec.</h4>
            <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
            <div className="footer__box--location">
               <img src="../../assets/footer/location.svg" alt="location" />
               <p>Sawojajar Malang, Indonesia</p>
            </div>
            <div className="footer__box--phone">
               <img src="../../assets/footer/phone.svg" alt="phone" />
               <p>+6289 456 3455</p>
            </div>
         </div>
         
         <div className="footer__box second">
            <h4>Menu</h4>
            <Link to='/products'>Products</Link>
            <Link to='/rooms'>Rooms</Link>
            <Link to='/inspirations'>Inspirations</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/terms'>Terms & Policy</Link>
         </div>

         <div className="footer__box third">
            <h4>Account</h4>
            <p>My Account</p>
            <p>Checkout</p>
            <p>My Cart</p>
            <p>My catalog</p>
         </div>

         <div className="footer__box fourth">
            <h4>Stay Connected</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
         </div>

         <div className="footer__box last">
            <h4>Stay Updated</h4>
            <div className="footer__box5--input">
               <input type="text" placeholder='Enter your email' />
               <img src="../../assets/footer/send.svg" alt="send" />
            </div>
         </div>
      </footer>
   )
}

export default Footer
