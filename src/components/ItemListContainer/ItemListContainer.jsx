import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
// STYLES
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.scss"
// ROUTER
import { useParams } from "react-router-dom";
// FIREBASE
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";


export default function ItemListContainer() {

   const [loader, setLoader] = useState(true)
   const [products, setProducts] = useState([])
   const { id } = useParams();

   async function getProducts(db) {
      const productsCol = collection(db, 'products');
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map(doc => {
         let product = doc.data();
         product.id = doc.id;
         return product;
      });
      return productList;
   }
   
   useEffect(() => {
      setLoader(true)
      getProducts(db).then((data) => {
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

