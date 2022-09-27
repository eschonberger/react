import React from 'react';

import ItemList from './ItemList';

//CSS
import './ItemListContainer.css';


import { customFetch } from '../utils/customFetch.js';
import { useState, useEffect } from 'react';

//Spinner
import CircularProgress from '@mui/material/CircularProgress';

import { useParams }  from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

    let { IdCategoria } = useParams();
    console.log(IdCategoria);
    
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'


    useEffect(() => {
/*        fetch(`${URL_CATEGORY}${IdCategoria}`)*/
        fetch((IdCategoria===undefined) ? `${URL_BASE}` : `${URL_CATEGORY}${IdCategoria}`)            
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

    }, [IdCategoria])


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