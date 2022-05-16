
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
  <CartContextProvider>
=======
<<<<<<< HEAD
=======
  <CartContextProvider>
>>>>>>> Desafio5
>>>>>>> refs/remotes/origin/master

    <BrowserRouter>
    
        <NavBar/>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/master

        <Routes>

          <Route path = '/' element ={<ItemListContainer/>}/>

          <Route path='/item/:itemId' element={<ItemsDetailContainer/>}/>

          <Route path='/category/:catId' element={<ItemListContainer/>}/>
<<<<<<< HEAD
=======

          <Route path='/cart' element={<Cart/>}/>
=======

        <Routes>

          <Route path = '/' element ={<ItemListContainer/>}/>

          <Route path='/item/:itemId' element={<ItemsDetailContainer/>}/>

          <Route path='/category/:catId' element={<ItemListContainer/>}/>
>>>>>>> refs/remotes/origin/master

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