import Item from "../Item/Item";
import './ItemList.scss'

const ItemList = ({ products }) => {

   return (
      <>
         {                           
            products.map(product => {
               return (          
                  <Item key={product.id} data={product} />               
               )
            })   
         }
      </>
   )
}

export default ItemList
