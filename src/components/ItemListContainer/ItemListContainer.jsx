import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.scss"

export default function ItemListContainer() {
   return (
      <>
         <h3 className="list">Our Products</h3>
         <ItemList />
      </>
   )
}