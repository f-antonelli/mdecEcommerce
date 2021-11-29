import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.scss"

export default function ItemListContainer() {
   return (
      <>
         <h3 className="list">Listado de productos</h3>
         <ItemCount stock={5} />
      </>
   )
}