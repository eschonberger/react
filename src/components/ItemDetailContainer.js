import React from 'react';

import ItemDetail from './ItemDetail';

import ItemCount from './ItemCount';


//Importo Libreria SweetAler
import Swal from 'sweetalert2';

//CSS
import './ItemDetailContainer.css';

import { customFetch } from '../utils/customFetch.js';
import { useState, useEffect } from 'react';

//Spinner
import CircularProgress from '@mui/material/CircularProgress';

import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({ greeting }) => {

    //Detectar y mostrar Boton Finalizar Compra
    const [finalizarCompra, setfinalizarCompra] = useState(false);

    
    const onAdd = () => {
        setfinalizarCompra(true);
      

    }



    
    let { IdProducto } = useParams();
    
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({});
    const URL_PRODUCT = 'https://fakestoreapi.com/products/'



    useEffect(() => {

        const getItem = async () => {
            try {
/*                const respuesta = await fetch('https://fakestoreapi.com/products/1')*/
                const respuesta = await fetch(`${URL_PRODUCT}${IdProducto}`)
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

    }, [IdProducto])


    return (
        <>
            <h2> {greeting} </h2>

            {loading ? <CircularProgress /> : <ItemDetail product={producto} />}
            
            <ItemCount stock="5" initial="1" onAdd={onAdd} finalizarCompra={finalizarCompra} />
            
        </>
    )
}


export default ItemDetailContainer