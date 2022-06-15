import React, { useEffect, useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  TextField, 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  Select,
  MenuItem,
  Button,
  Grid,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import LastPageIcon from '@mui/icons-material/LastPage';

const ItemForm = ({
  onClose, 
  isEditing = false, 
  data = {}
}) => {
  const [name, setName] = useState(data.name ? data.name : '');
  const [description, setDescription] = useState(data.description ? data.description : '');
  const [quantity, setQuantity] = useState(data.quantity ? data.quantity : 1);
  const [purchased, setPurchased] = useState(data.purchased ? data.purchased : false);
  const [error, setError] = useState('');

  const item_id = data.item_id ? data.item_id : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      quantity,
      purchased
    };

    const shouldPatch = isEditing && item_id !== 0;

    let url = 'http://localhost:8080/api/list_items';

    if(shouldPatch) {
      url += '/' + item_id;
    }

    console.log(isEditing, item_id, shouldPatch);

    (async () => {
      const rawRes = await fetch(url, {
        method: shouldPatch ? 'PATCH' : 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res = await rawRes.json();

      if(res.status === 'success') {
        onClose();
      } else {
        setError(res.error);
      }
    })();
  }

  return (
    <Dialog open={true} onClose={onClose} fullWidth={true} maxWidth="sm">
      <AppBar position="relative" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Shopping List
          </Typography>

          <LastPageIcon onClick={onClose} />
        </Toolbar>
      </AppBar>
      
      <DialogContent sx={{flexGrow: 1}}>
        <Typography color="black" variant='h6'>
          {isEditing ? 'Edit' : 'Add'} an Item
        </Typography>

        <Typography>
          {isEditing ? 'Edit your item below' : 'Add your new item below'}
        </Typography>

        <Box component="form" onSubmit={(e) => handleSubmit(e) }>
          <TextField 
            margin="normal" 
            fullWidth 
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />

          <TextField 
            margin="normal" 
            fullWidth 
            multiline 
            rows={4} 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
          
          <Select fullWidth value={quantity} onChange={(e) => setQuantity(e.target.value)}> 
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>

          {isEditing && (
            <FormControlLabel control={<Checkbox checked={purchased} />} label="Purchased" />
          )}

          <Grid container sx={{mt: 4}} justifyContent="flex-end">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {isEditing ? 'Save Item' : 'Add Item'}
            </Button>
          </Grid>
        </Box>
      </DialogContent> 
    </Dialog>
  );
};

export default ItemForm;