import React from "react";
import Grocery from "./Grocery";

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Grocery
          item={item}
          key={item.id}
          onDelete={onDeleteItem}
          onCheckedItem={onCheckedItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;
