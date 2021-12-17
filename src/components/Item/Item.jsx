import { Link } from 'react-router-dom';
import './Item.scss'

const Item = ({ data }) => {

   const { id, name, description, price, stock, image } = data;

   return (
      <div className="container-card">
         <img src={`../../assets/imgproducts/${image}`} alt="asd" />
         <div className="box-text">
            <h3>{name}</h3>
            <p className="description">{description}</p>
            <p className="price">$ {price}</p>
            <span>Stock: {stock}</span>
         </div>
         <div className="hover-card">
            <Link to={`/item/${id}`} className="details-card">View Details</Link>
            <div className="reactions">
               <p>Share</p>
               <p>Like</p>
            </div>
         </div>
      </div>
   )
}

export default Item
