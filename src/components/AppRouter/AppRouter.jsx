import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import NotFound from '../../pages/NotFound/NotFound';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const AppRouter = () => {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path='/products/:id' element={<ItemDetailContainer />} />
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
