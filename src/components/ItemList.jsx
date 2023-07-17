import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function ItemList({ items, onDeleteItem, onToggleItem }) {
  const [allChecked, setAllChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const areAllChecked =
      items.length > 0 && items.every((item) => item.completed);
    setAllChecked(areAllChecked);
  }, [items]);

  const handleCheckboxChange = (id) => {
    onToggleItem(id);
  };

  const handleFinalSubmit = () => {
    if (allChecked) {
      setModalIsOpen(true);
    } else {
      alert("Not All Items Have Been Checked");
    }
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.text}
            </label>
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div>
          <button onClick={handleFinalSubmit}>Submit</button>
          {allChecked && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              contentLabel="Submission Confirmation"
            >
              <h2>Congratulations! Checklist Complete!</h2>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

export default ItemList;
