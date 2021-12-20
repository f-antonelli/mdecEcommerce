import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.scss"
import data from "../../data.json"
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

   const [loader, setLoader] = useState(true)
   const [products, setProducts] = useState([])
   const { id } = useParams();

   const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(data)
      }, 2000)
   });
   
   useEffect(() => {
      setLoader(true)
      getProducts.then((data) => {
         if (id !== undefined){
            setProducts(data.filter (product => product.category === Number(id)));
         } else {
            setProducts(data)
         }
         setLoader(false)
      })
   }, [id]);
   
   console.log(id)
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

