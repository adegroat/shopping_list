import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';

import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';

const Main = () => {
  const [listItems, setListItems] = useState([]);
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadItemList = () => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/api/list_items');
      const jsonData = await data.json();
      setListItems(jsonData);
      setLoading(false);
    }
    fetchData().catch(console.log);
  }

  useEffect(() => {
    loadItemList();
  }, []);

  return(
    <>
      {loading && (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: '48px'}}>
          <CircularProgress size={80}/>
        </Box>
      )}

      {!loading && (
        <div className="flex-col">
          {listItems.length > 0 && <ShoppingList loadItemList={loadItemList} items={listItems} />}
          
          {listItems.length <= 0 && (
            <div className="empty-list">
              <div>Your shopping list is currently empty :(</div>
              
              <div>
                <Button onClick={() => setAddItemVisible(true)} variant="contained">Add Items</Button>
              </div>
            </div>
          )}
        </div>
      )}


      {addItemVisible && (
        <ItemForm onClose={() => {
          loadItemList();
          setAddItemVisible(false)
        }} />
      )}
    </>
  )
}

export default Main;