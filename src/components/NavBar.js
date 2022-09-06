import React from 'react';

//Imagen desde carpeta Local
import logo from '../assets/logo.png'

//Imagen desde Material Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//CSS
import "./NavBar.css";
    
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

            </nav>

            <ShoppingCartIcon fontSize="large"/>




        </header>
    )
}

export default NavBar