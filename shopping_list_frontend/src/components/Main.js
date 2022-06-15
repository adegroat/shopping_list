import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';

const Main = () => {
  const [listItems, setListItems] = useState([]);
  const [addItemVisible, setAddItemVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/api/list_items');
      const jsonData = await data.json();
      setListItems(jsonData);
    }
    fetchData().catch(console.log);
  }, []);

  return(
    <>
      <div className="flex-col">
        {listItems.length > 0 && <ShoppingList items={listItems} />}
        
        {listItems.length <= 0 && (
          <div className="empty-list">
            <div>Your shopping list is currently empty :(</div>
            
            <div>
              <Button onClick={() => setAddItemVisible(true)} variant="contained">Add Items</Button>
            </div>
          </div>
        )}
      </div>

      {addItemVisible && <ItemForm onClose={() => setAddItemVisible(false)} />}
    </>
  )
}

export default Main;