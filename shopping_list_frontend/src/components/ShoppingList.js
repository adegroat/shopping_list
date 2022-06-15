import React, { useState } from 'react';

import { Container, Typography, Box, Button } from '@mui/material';

import Item from './Item';
import ItemForm from './ItemForm';

const ShoppingList = ({items}) => {
  const [itemFormVisible, setItemFormVisible] = useState(false);

  const itemsJsx = items.map(item => {
    return (
      <Item
        key={item.item_id}
        name={item.name} 
        description={item.description}
        quantity={item.quantity}
        purchased={item.purchased} 
      />
    )
  });

  return(
    <>
      <Container sx={{mt: '16px'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant='h6'>
            Your Items
          </Typography>

          <Button onClick={() => setItemFormVisible(true)} variant="contained">Add Item</Button>
        </Box>

        {itemsJsx}
      </Container>
      
      {itemFormVisible && <ItemForm onClose={() => setItemFormVisible(false)} />}

    </>
  )
}

export default ShoppingList;