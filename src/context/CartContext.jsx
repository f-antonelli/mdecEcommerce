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

   
   const removeCart = (product) => {
      setProducts(products.filter(item => item.name !== product.name))
   }

   const removeAllCart = () => {
      setProducts([]);
   }
   
   const totalToPay = products.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
   },0);

   const data = {
      products,
      addProducts,
      removeCart,
      removeAllCart,
      totalToPay
   };

   return (
      <CartContext.Provider value={ data }>
         { children }
      </CartContext.Provider>
   )
}

export { CartProvider }
export default CartContext