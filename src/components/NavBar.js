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

            <h1>Esencias Naturales</h1>

            <nav>
                <a href="">Velas</a>

                <a href="">Difusores</a>

                <a href="">Splash</a>

                <a href="">Jabones</a>

                {/*Componente Carrito*/}
                <CartWidget />

            </nav>






        </header>
    )
}

export default NavBar