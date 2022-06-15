import React from 'react';

import { Grid } from '@mui/material';

import Item from './Item';

const ShoppingList = ({items}) => {
  const itemsJsx = items.map(item => {
    return (
      <Item key={item.item_id} name={item.name} description={item.description} />
    )
  });

  return(
    <Grid>{itemsJsx}</Grid>
  )
}

export default ShoppingList;