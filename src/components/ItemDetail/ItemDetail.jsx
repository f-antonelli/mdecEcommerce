import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react';
const ItemDetail = ({ data }) => {
  
  const [currentStock, setCurrentStock] = useState(0);

  const stockValue = (value) => {
    setCurrentStock(value);
  }

   return (
      <div className="product">
      <div className="product__img">
        <div className="product__img--mainimg">
          <img src={`../../assets/imgproducts/${data.image}`} alt={`mainimg${data.id}`} />
        </div>
      </div>

      <div className="product__info">
        <h3 className="product__info--title">{data.name}</h3>
        <p className="product__info--description">{data.description}</p>
        <h4 className="product__info__boxprice--price">${data.price}</h4>
        <div className="product__info__buttons">
            <ItemCount stock={data.stock} stockValue={stockValue} />
            <div className="product__info_addcart">
               <Link to='/cart'>
                <img src="../../assets/nav/cart.svg" alt="addcart" />
                <p>Add to cart</p>
               </Link>
            </div>
        </div>
        <p className="product__info--description">Stock disponible: {data.stock - currentStock}</p>
      </div>
    </div>
   )
}

export default ItemDetail
