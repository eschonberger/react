import React from 'react';


//Material Icons
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const ItemDetail = ({ product }) => {

    return (
        <>

            <Typography component='div' >{product.title}</Typography>
            <Grid container alignItems='center' alignContent='center'>

                <Card  >

                    <CardMedia
                        component='img'
                        sx={{ display: 'flex', alignItems: 'center', width: 200, margin: 5, p: 2 }}
                        image={product.image}
                        alt={product.description}
                    />
                    <CardContent>

                        <Typography component='div'>{product.description}</Typography>
                        <Typography component='div' >Precio: ${product.price}</Typography>

                    </CardContent>
                    <CardActions>

                    </CardActions>

                </Card>
            </Grid>


        </>
    )


}


export default ItemDetail;
