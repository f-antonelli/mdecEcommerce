import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import NotFound from '../../pages/NotFound/NotFound';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const AppRouter = () => {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path='/item/:id' element={<ItemDetailContainer />} />
               <Route path='/category/:id' element={<ItemListContainer />} />
               <Route path='/products' element={<Products />} />
               <Route path='/' element={<Home />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default AppRouter
