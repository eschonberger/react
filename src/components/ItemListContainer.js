import React from 'react';

import ItemList from './ItemList';

//CSS
import './ItemListContainer.css';

import { products } from '../assets/productos.js';
import { customFetch } from '../utils/customFetch.js';
import { useState, useEffect } from 'react';

//Spinner
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = ({ greeting }) => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                const lista = data.map((product) => {
    return { ...product, stock: Math.floor(Math.random() * 100) }
})
setListProducts(lista)
})
.catch (() => {
    setError(true)

})
.finally(() => {
    setLoading(false)
})

}, [])


return (
    <>
        <h2> {greeting} </h2>

        {
            /*            <ItemCount stock="5" initial="2" />*/
        }

        {loading ? <CircularProgress /> : <ItemList listProducts={listProducts} />}
    </>
)
}


export default ItemListContainer