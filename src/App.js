import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
    <NavBar></NavBar>

    <ItemListContainer mensajeBoton='PRÓXIMAMENTE' mensajeLabel='Acá vas a encontrar nuestro catálogo'></ItemListContainer>



    </>
  );
}

export default App;
