import React from 'react';

import ItemDetail from './ItemDetail';

//CSS
import './ItemDetailContainer.css';

import { customFetch } from '../utils/customFetch.js';
import { useState, useEffect } from 'react';

//Spinner
import CircularProgress from '@mui/material/CircularProgress';


const ItemDetailContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({});


    useEffect(() => {

        const getItem = async () => {
            try {
                const respuesta = await fetch('https://fakestoreapi.com/products/1')
                const data = await respuesta.json();

                setProducto(data);

            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }

        }

        getItem();

    }, [])


    return (
        <>
            <h2> {greeting} </h2>

            {loading ? <CircularProgress /> : <ItemDetail product={producto} />}

        </>
    )
}


export default ItemDetailContainer