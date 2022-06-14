import React from 'react';

const ShoppingList = ({items}) => {
  const itemsJsx = items.map(item => {
    return (
      <div key={item.item_id} className="item">
        <p>{item.name}</p>

      </div>
    )
  });

  return(
    <div>{itemsJsx}</div>
  )
}

export default ShoppingList;