import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleToggleItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const handleFinalSubmit = () => {
    // Perform final submission logic here
    alert('Safety checklist submitted!');
  };
  
  const handleAddItem = (item) => {
    const newItem = {
      id: Date.now(),
      text: item.text,
      completed: false,
    };
  
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Safety Checklist</h1>
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
    </div>
  );
}

export default App;