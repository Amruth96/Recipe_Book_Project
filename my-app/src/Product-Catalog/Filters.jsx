import React from 'react';

const Filters = ({ selectedCategory, onCategoryChange, onPriceRangeChange }) => {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    onPriceRangeChange([min, max]);
  };

  return (
    <div className="filters">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home Appliances">Home Appliances</option>
      </select>

      <select onChange={handlePriceRangeChange}>
        <option value="0-100">0 - 100</option>
        <option value="100-500">100 - 500</option>
        <option value="500-1000">500 - 1000</option>
        <option value="1000-10000">1000+</option>
      </select>
    </div>
  );
};

export default Filters;
