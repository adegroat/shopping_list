import React, { useState } from 'react';

import { 
  Box, 
  Typography, 
  Checkbox, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Button 
} from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import ItemForm from './ItemForm';

const Item = ({data, loadItemList}) => {
  const { name, description, quantity, purchased, item_id } = data
  const [purchasedChecked, setPurchasedChecked] = useState(purchased);  
  const [itemEdit, setItemEdit] = useState(0);
  const [error, setError] = useState('');
  const [deleteVisible, setDeleteVisible] = useState(false);

  const updatePurchased = (e) => {
    setPurchasedChecked(!purchasedChecked);
  }

  const deleteItem = () => {
    (async () => {
      const rawRes = await fetch('http://localhost:8080/api/list_items/' + item_id, {
        method: 'DELETE',
      });
      const res = await rawRes.json();

      if(res.status === 'success') {
        loadItemList();
      } else {
        setError(res.error);
      }
      setDeleteVisible(false);
    })();
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
          <EditOutlinedIcon onClick={() => setItemEdit(item_id)} />
          <DeleteOutlinedIcon onClick={() => setDeleteVisible(true)} />
        </Box>
      </Box>

      {itemEdit !== 0 && (
        <ItemForm 
          data={data} 
          isEditing={true}
          onClose={() => {
            loadItemList();
            setItemEdit(0)
          }
        } />
      )}

      {deleteVisible && (
        <Dialog open={true} maxWidth="xs">
          <DialogTitle>
            Delete Item?
          </DialogTitle>

          <DialogContent>
            <Box>
              Are you sure you want to delete this item? This can not be undone.
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', mt: '32px'}}>
              <Button onClick={() => setDeleteVisible(false)}>Cancel</Button>
              <Button onClick={() => deleteItem() } variant='contained'>Delete</Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default Item;