import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text,
    };

    onAddItem(newItem);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a safety item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
