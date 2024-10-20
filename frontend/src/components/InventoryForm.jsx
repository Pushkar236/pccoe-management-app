import React, { useState } from 'react';

const InventoryForm = () => {
  const [inventoryData, setInventoryData] = useState({
    itemName: '',
    quantity: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/inventory', {
      method: 'POST',
      body: JSON.stringify(inventoryData),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Inventory</h2>
      <input
        type="text"
        name="itemName"
        placeholder="Item Name"
        value={inventoryData.itemName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={inventoryData.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={inventoryData.department}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
