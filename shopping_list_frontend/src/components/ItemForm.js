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
  Grid
} from '@mui/material';
import LastPageIcon from '@mui/icons-material/LastPage';

const ItemForm = ({onClose, isEditing = false}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddTask = (e) => {
    alert("Add Task");
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
        <Typography color="primary">
          {isEditing ? 'Edit' : 'Add'} an Item
        </Typography>

        <Typography>
          {isEditing ? 'Edit your new item below' : 'Add your new item below'}
        </Typography>

        <Box component="form" onSubmit={(e) => handleAddTask(e) }>
          <TextField 
            margin="normal" 
            fullWidth 
            placeholder="Item Name"
            onChange={(e) => setName(e.target.value)} />

          <TextField 
            margin="normal" 
            fullWidth 
            multiline 
            rows={4} 
            placeholder="Description"
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

          <Grid container sx={{mt: 4}} justifyContent="flex-end">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {isEditing ? 'Add Item' : 'Save Item'}
            </Button>
          </Grid>
        </Box>
      </DialogContent> 
    </Dialog>
  );
};

export default ItemForm;