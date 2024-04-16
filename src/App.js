import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    { id: 1, quantity: "2", name: "Milk", isChecked: false },
    { id: 2, quantity: "2", name: "Coffee", isChecked: false },
    { id: 3, quantity: "4", name: "Sugar", isChecked: false },
  ]);

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app-container">
      <Header className="header" />
      <Form onAddItem={handleAddItem} className="form" />
      <GroceryList
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleCheckedItems}
        className="grocery-list"
      />
      <button onClick={handleClearList} className="clear-button">
        Clear
      </button>
      <br />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-select"
      >
        <option value="input">Sort by Input</option>
        <option value="name">Sort by name</option>
        <option value="checked">Sort by check status order</option>
      </select>
      <Footer items={items} />
    </div>
  );
}

export default App;
