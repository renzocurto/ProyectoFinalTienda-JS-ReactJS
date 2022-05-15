
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemsDetailContainer from './components/ItemsDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import CartContextProvider from './context/CartContext';

export default function App() {
  return (
  <CartContextProvider>

    <BrowserRouter>
    
        <NavBar/>

        <Routes>

          <Route path = '/' element ={<ItemListContainer/>}/>

          <Route path='/item/:itemId' element={<ItemsDetailContainer/>}/>

          <Route path='/category/:catId' element={<ItemListContainer/>}/>

        </Routes>

    </BrowserRouter>

  </CartContextProvider>
    );
}


