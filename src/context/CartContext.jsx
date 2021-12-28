import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
   const [products, setProducts] = useState([])

   const addProducts = (product) => {
      const itemsInCart = products.find(e => e.id === product.id) 
         
      itemsInCart 
         ? setProducts(products.map(e => {
            return (
               {
                  ...itemsInCart, quantity: itemsInCart.quantity + product.quantity, price: itemsInCart.price * (itemsInCart.quantity + product.quantity)
               }
            )
         }))
         : setProducts([...products, product])
   };

   const data = {
      products,
      addProducts
   };

   return (
      <CartContext.Provider value={ data }>
         { children }
      </CartContext.Provider>
   )
}

export { CartProvider }
export default CartContext