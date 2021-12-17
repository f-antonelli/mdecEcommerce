import { useEffect, useState } from "react"
import data from "../../data.json"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList";

const ItemCategoryContainer = () => {
   const [product, setProduct] = useState([]);
   const [loader, setLoader] = useState(true);
   const { id } = useParams();

   const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(data);
      }, 2000)
   });

   useEffect(() => {
      getProducts.then( data => {
         setProduct(data.filter (product => product.category === Number(id)));
         setLoader(false);
      })
   }, [id, loader]);

   return (
      <div className="container">
{         loader
         ? <CircularProgress />
         : <ItemList products={product} />}
      </div>
   )
}

export default ItemCategoryContainer
