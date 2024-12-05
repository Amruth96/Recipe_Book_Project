import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-options">
      <select onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
};

export default SortOptions;
