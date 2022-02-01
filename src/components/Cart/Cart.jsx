import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import RemoveIcon from '@mui/icons-material/Remove';
import './Cart.scss'
import { Button } from "@mui/material";
import ModalCart from "../ModalCart/ModalCart";

const Cart = () => {
   const { products, removeCart, totalToPay } = useContext(CartContext);
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

   return (
      <>
         <h2 className="title-shopcart">Shopping Cart</h2>
         {
            products.length > 0 
            ?
            <div className="container-shoppingcart">
               <div className="container-items">
                  {
                     products.map((product) => {
                        return (
                           <div className="container-item" key={product.name}>
                              <div className="box-img">
                                 <img src={`../../assets/imgproducts/${[product.img]}`} alt={product.image} />
                              </div>
                              <div className="box-title">
                                 <h2>{product.name}</h2>
                                 <p>{product.description}</p>
                              </div>
                              <div className="cant-item">{product.quantity}</div>
                              <div className="price-item">$ {product.price}</div>
                              <RemoveIcon className='itemRemove' onClick={() => removeCart(product)}/>

                           </div>
                        )
                     })
                  }
               </div>
               <div className="container-infoshopping">
                  <div className="total">
                     <h3>Total a pagar:</h3>
                     <span>$ {totalToPay}</span>
                  </div>
                  <Button className="button-finish" onClick={handleClickOpen}>Finalizar Compra</Button>
               </div>
            </div>
            :
            <div className="cart-empty">el cart esta vacio</div>
         }
         <ModalCart 
            open={open} 
            handleClose={handleClose} 
            products={products}
            totalToPay={totalToPay} 
         />
      </>
   )
}

export default Cart
