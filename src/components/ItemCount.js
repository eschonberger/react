import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './ItemCount.css';

//Importo Libreria SweetAler
import Swal from 'sweetalert2';

//Material Icons
//import { Card, CardMedia, CardContent} from '@material-ui/core';


//Material Icons
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const ItemCount = ({ stock, initial, onAdd, finalizarCompra }) => {

    //Parseo para que se trabajen como numericos
    let cantStock = parseInt(stock);
    let valor = parseInt(initial);

    //Inicializo con el valor reicibido
    const [contador, setContador] = useState(valor);

    const sumar = () => {
        //Verifica que no supere la cantidad de Stock
        if (cantStock > contador) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        //Controla que no se ponga en 0
        if (contador > 1) {
            setContador(contador - 1);
        }


    }



    return (
        <>


            <Grid container alignItems='center' alignContent='center'>
                <Card>

                    <CardContent>
                        <Typography variant='h2' component='div' >{contador}</Typography>

                    </CardContent>
                    <CardActions>
                        <Button onClick={restar} size='small'>-</Button>
                        <Button onClick={sumar} size='small'>+</Button>
                    </CardActions>

                    {
                        finalizarCompra === false ? <Button onClick={onAdd} size='small'>Agregar al Carrito</Button> : <Link to="/cart/">Finalizar Compra</Link>
                    }
                    
                </Card>
            </Grid>




        </>
    )
}

export default ItemCount;