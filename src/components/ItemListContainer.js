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


    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
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