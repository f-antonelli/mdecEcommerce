import { useState } from "react"
import "./ItemCount.scss"

export default function ItemCount({ stock, stockValue }) {

   const [itemCant, setItemCant] = useState(0);
   const [disable, setDisable] = useState(false);

   const add = () => {
      itemCant < stock && setItemCant(itemCant + 1);
      setDisable(false);
      itemCant === stock && setDisable(true);
      if (itemCant !== stock)
         stockValue(itemCant + 1)
   }

   const remove = () => {
      itemCant > 0 && setItemCant(itemCant - 1);
      setDisable(false);
      if (itemCant !== 0)
         stockValue(itemCant - 1)
   }

   return (
      <>
         <div className="product__info__count">
            <button  className="button" onClick={remove}>-</button>
            <p>{itemCant}</p>
            <button disabled={disable} className="button" onClick={add}>+</button>
         </div>
      </>
   )
}