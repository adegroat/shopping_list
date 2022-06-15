import React, { useState } from 'react';

import { Box, Typography, Checkbox } from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import ItemForm from './ItemForm';

const Item = ({itemId, name, description, quantity, purchased}) => {
  
  const [purchasedChecked, setPurchasedChecked] = useState(purchased);  
  const [itemEdit, setItemEdit] = useState(0);

  const updatePurchased = (e) => {
    setPurchasedChecked(!purchasedChecked);
  }

  return (
    <>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        border: 'solid 1px #ccc', 
        mt: '8px', p: '8px'
      }}>
        <Box sx={{display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center'}}>
          <Box>
            <Checkbox checked={purchasedChecked} onChange={(e) => updatePurchased(e)} />
          </Box>
          
          <Box sx={{display: 'flex', flexDirection: 'column', ml: '6px'}}>
            <Typography sx={{
              color: purchasedChecked ? '#1976d2' : 'black', 
              fontWeight: 'bold', 
              textDecoration: purchasedChecked ? 'line-through': 'normal'
            }}>
              {name}
            </Typography>

            <Typography color='gray' sx={{
              textDecoration: purchasedChecked ? 'line-through': 'normal'
            }}>
              {description}
            </Typography>
          </Box>
        </Box>

        <Box>
          <EditOutlinedIcon onClick={() => setItemEdit(itemId)} />
          <DeleteOutlinedIcon />
        </Box>
      </Box>

      {itemEdit !== 0 && (
        <ItemForm 
          nameProp={name} 
          descriptionProp={description}
          purchasedProp={purchasedChecked}
          quantityProp={quantity}
          isEditing={true} 
          onClose={() => setItemEdit(0)} />
      )}
    </>
  )
}

export default Item;