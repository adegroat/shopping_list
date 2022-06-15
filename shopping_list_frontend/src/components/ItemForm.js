import React, { useEffect } from 'react';
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
  Button
} from '@mui/material';
import LastPageIcon from '@mui/icons-material/LastPage';

const ItemForm = ({onClose}) => {

  return (
    <Dialog open={true} onClose={onClose} fullWidth={true} maxWidth="sm">
      <AppBar position="relative" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Shopping List
          </Typography>

          <LastPageIcon />
        </Toolbar>
      </AppBar>
      
      <DialogContent sx={{flexGrow: 1}}>
        <Typography color="primary">
          Add an Item
        </Typography>

        <Typography>
          Add your new item below
        </Typography>

        <Box component="form" onSubmit={() => alert("test")}>
          <TextField margin="normal" fullWidth placeholder="Item Name" />
          <TextField margin="normal" fullWidth multiline rows={5} placeholder="Description" />
          <Select fullWidth> 
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

          <Box component="div" margin="normal">
            <Button>Cancel</Button>
            <Button variant="contained">Add Task</Button>
          </Box>
        </Box>
      </DialogContent> 
    </Dialog>
  );
};

export default ItemForm;