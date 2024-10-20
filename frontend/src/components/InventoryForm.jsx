import React, { useState } from 'react';
import './InventoryForm.css'; // Styles for Inventory Form

const InventoryForm = () => {
  const [inventory, setInventory] = useState({
    itemName: '',
    quantity: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventory({ ...inventory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add inventory submission logic here
    console.log('Inventory added:', inventory);
  };

  return (
    <div className="inventory-form">
      <h2>Manage Inventory</h2>
      <form onSubmit={handleSubmit} className="inventory-form__content">
        
        {/* Item Name Field */}
        <div className="form-group">
          <label htmlFor="itemName" className="form-label">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={inventory.itemName}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        {/* Quantity Field */}
        <div className="form-group">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={inventory.quantity}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        {/* Department Field */}
        <div className="form-group">
          <label htmlFor="department" className="form-label">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={inventory.department}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-btn">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
