import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import data from "../../data.json"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

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
         setProduct(data.find (product => product.id === Number(id)));
         setLoader(false);
      })
   }, [id]);

   return (
      <div className="container">
{         loader
         ? <CircularProgress />
         : <ItemDetail data={product} />}
      </div>
   )
}

export default ItemDetailContainer
