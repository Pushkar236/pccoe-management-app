import React from "react";

function InventoryList({ inventory }) {
  return (
    <div className="list">
      <h2>Inventory List</h2>
      <ul>
        {inventory.length > 0 ? (
          inventory.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))
        ) : (
          <li>No inventory items added yet.</li>
        )}
      </ul>
    </div>
  );
}

export default InventoryList;
