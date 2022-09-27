import React from 'react';

//Imagen desde carpeta Local
import logo from '../assets/logo.png';

//CSS
import "./NavBar.css";

//Componente Carrito
import CartWidget from '../components/CartWidget';

import { Nav } from './Nav';

import { Link } from 'react-router-dom';



const NavBar = ({ nombre, apellido, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'electronics', ruta: '/categoria/electronics' },
        { id: 1, nombre: 'jewelery', ruta: '/categoria/jewelery' },
        { id: 2, nombre: "men's clothing", ruta: "/categoria/men's clothing" },
        { id: 3, nombre: "woman's clothing", ruta: "/categoria/women's clothing" },


    ]


    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="logo"></img>

            </Link>

            <h1>Venta Online</h1>

            <Nav categorias={categorias} />

            {/*Componente Carrito*/}

            <Link to={'/cart'}>
                <CartWidget />
            </Link>

        </header>
    )
}

export default NavBar