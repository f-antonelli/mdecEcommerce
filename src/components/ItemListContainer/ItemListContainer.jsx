import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.scss"
import data from "../../data.json"

export default function ItemListContainer() {

   const [loader, setLoader] = useState(true)
   const [products, setProducts] = useState([])

   const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(data)
      }, 2000)
   });

   useEffect(() => {
      getProducts.then((data) => {
         setProducts(data)
         setLoader(false)
      })
   }, []);

   return (
      <>
         <h3 className="list">Our Products</h3>
         <div className="container-products">
            {
               loader 
               ? <CircularProgress />
               : <ItemList products={products} />
            }
         </div>
      </>
   )
}

