import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemList.scss'
import CircularProgress from '@mui/material/CircularProgress';

const ItemList = () => {
   const [loader, setLoader] = useState(true)
   const [products, setProducts] = useState([])

   const ListProducts = [
      {
         id: 1,
         name: 'Leviosa',
         description: 'Stylish cafe chair',
         price: 20000,
         stock: 6,
         image: 'img3.png'
      },
      {
         id: 2,
         name: 'Syltherine',
         description: 'Stylish cafe table',
         price: 65000,
         stock: 2,
         image: 'img1.png'
      },
      {
         id: 3,
         name: 'Lolito',
         description: 'Luxury big sofa',
         price: 130000,
         stock: 1,
         image: 'img4.png'
      },
      {
         id: 4,
         name: 'Respira',
         description: 'Minimalist fan',
         price: 72000,
         stock: 3,
         image: 'img5.png'
      },
      {
         id: 5,
         name: 'Grifo',
         description: 'Night lamp',
         price: 28000,
         stock: 7,
         image: 'img1.png'
      },
      {
         id: 6,
         name: 'Muggo',
         description: 'Small mug',
         price: 1300,
         stock: 17,
         image: 'img6.png'
      },
      {
         id: 7,
         name: 'Pingky',
         description: 'Cute bed set',
         price: 97000,
         stock: 4,
         image: 'img8.png'
      },
      {
         id: 8,
         name: 'Potty',
         description: 'Minimalist flower pot',
         price: 3300,
         stock: 9,
         image: 'img7.png'
      }
   ]

   const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(ListProducts)
      }, 2000)
   });

   useEffect(() => {
      getProducts.then((data) => {
         setProducts(data)
         setLoader(false)
      })
   }, []);

   return (
      <div className="container-products">
         {
            loader 
            ? <CircularProgress />
            :
               products.map(product => {
                  return (          
                     <Item key={product.id} data={product} />               
                  )
               })   
         }
      </div>
   )
}

export default ItemList
