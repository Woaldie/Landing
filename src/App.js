import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/CartContext';


function App() {
  return (
    <BrowserRouter>
      
      <NavBar /> 

      <CartProvider>

        <Routes>

          <Route exact path= '/' element = {<ItemListContainer />} />

          <Route exact path='/category/:category' element = {<ItemListContainer />} />

          <Route exact path='/item/:id' element = {<ItemDetailContainer />} />
        </Routes>
        
     </CartProvider>
    </BrowserRouter>
  );
}

export default App;

