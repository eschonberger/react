import React from 'react';

//Imagen desde carpeta Local
import logo from '../assets/logo.png';

//CSS
import "./NavBar.css";

//Componente Carrito
import CartWidget from '../components/CartWidget';




const NavBar = () => {
    return (
        <header>
            <img src={logo} alt="logo"></img>

            <h1>Venta Online</h1>

            <nav>
                <a href="">Ropa Mujer</a>

                <a href="">Ropa Hombre</a>

                <a href="">Mochilas</a>

                <a href="">Accesorios</a>

                {/*Componente Carrito*/}
                <CartWidget />

            </nav>






        </header>
    )
}

export default NavBar