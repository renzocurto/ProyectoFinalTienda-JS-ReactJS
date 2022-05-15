
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemsDetailContainer from './components/ItemsDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import CartContextProvider from './context/CartContext';

export default function App() {
  return (
<<<<<<< HEAD
=======
  <CartContextProvider>
>>>>>>> Desafio5

    <BrowserRouter>
    
        <NavBar/>
<<<<<<< HEAD

        <Routes>

          <Route path = '/' element ={<ItemListContainer/>}/>

          <Route path='/item/:itemId' element={<ItemsDetailContainer/>}/>

          <Route path='/category/:catId' element={<ItemListContainer/>}/>

          <Route path='/cart' element={<Cart/>}/>
=======

        <Routes>

          <Route path = '/' element ={<ItemListContainer/>}/>

          <Route path='/item/:itemId' element={<ItemsDetailContainer/>}/>

          <Route path='/category/:catId' element={<ItemListContainer/>}/>

        </Routes>

    </BrowserRouter>

  </CartContextProvider>
    );
}
>>>>>>> Desafio5

        </Routes>

    </BrowserRouter>
    );
}