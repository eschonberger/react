import React from 'react';

import ItemCount from './ItemCount';

//CSS
import './ItemListContainer.css';


const ItemListContainer = ( {greeting} ) => {
    return (
        <>
            <h2> {greeting} </h2>

            <ItemCount stock="5" initial="2" />
        </>
        )
}


export default ItemListContainer