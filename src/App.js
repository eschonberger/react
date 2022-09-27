import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';




function App() {

    return (
        <>
            <BrowserRouter>

                <NavBar />

                <Routes>
                    <Route path='/' element={<ItemListContainer greeting="Bienvenido Usuario"> </ItemListContainer>} />
                    <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting="Bienvenido Usuario"> </ItemListContainer>} />
                    <Route path='/producto/:IdProducto' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<Cart/> } />
                </Routes>
                  

            </BrowserRouter>
        </>


    )
}


export default App;
