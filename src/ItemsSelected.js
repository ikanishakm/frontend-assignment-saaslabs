import React from 'react';
import './Select.css';

function ItemsPerPageSelect({ itemsPerPage, handleItemsPerPageChange }) {
  return (
    <div className="custom-select">
    <span className="info">Items per page</span>
      <select 
        value={itemsPerPage} 
        onChange={handleItemsPerPageChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}

export default ItemsPerPageSelect;