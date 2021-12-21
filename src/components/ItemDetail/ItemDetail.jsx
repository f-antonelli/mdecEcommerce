import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react';
import { Toaster, toast} from 'react-hot-toast'

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
               <button onClick={() => toast.success(`${currentStock} ${data.name} fueron agregados al carrito`)}>
                <img src="../../assets/nav/cart.svg" alt="addcart" />
                <p>Add to cart</p>
               </button>
            </div>
        </div>
        <p className="product__info--description">Stock disponible: {data.stock - currentStock}</p>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Link to='/products'>Ver mas productos</Link>
      <Link to='/cart' className="product--cart">Ir al carrito</Link>
    </div>

   )
}

export default ItemDetail
