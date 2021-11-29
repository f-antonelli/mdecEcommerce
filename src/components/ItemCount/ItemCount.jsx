import { useState } from "react"
import "./ItemCount.scss"

export default function ItemCount({ stock }) {

   const [itemCant, setItemCant] = useState(0);
   const [disable, setDisable] = useState(false);

   const add = () => {
      itemCant < stock && setItemCant(itemCant + 1);
      setDisable(false);
      
      itemCant === stock && setDisable(true);
   }

   const remove = () => {
      itemCant > 0 && setItemCant(itemCant - 1);
      setDisable(false);
   }

   return (
      <>
         <div className="container-item">
            <h3>Nombre del producto</h3>
            <div className="container-count">
               <button  className="button" onClick={remove}>-</button>
               <p>{itemCant}</p>
               <button disabled={disable} className="button" onClick={add}>+</button>
            </div>
            <button className="button-submit">Agregar al carrito</button>
            <p className="stock">Max stock : {stock}</p>
         </div>
      </>
   )
}