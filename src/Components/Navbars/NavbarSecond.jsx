import React, { useState } from 'react';
import "./NavbarSecond.css"

const FilterOptions = {
  GENDER: ['Female', 'Male', 'Kids'],
  CATEGORY: ['All Products', 'Dine Market'],
};

const SearchBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    gender: 'All',
    category: 'All Products',
  });

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters((prevState) => ({ ...prevState, [filterType]: filterValue }));
  };

  const handleSearch = (searchTerm) => {
    // Perform search logic here
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search in Our Store"
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="filter-options">
        <div className="filter-group">
          <label htmlFor="gender-filter">Gender:</label>
          <select
            id="gender-filter"
            value={selectedFilters.gender}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="All">All</option>
            {FilterOptions.GENDER.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="select-options">
            {FilterOptions.GENDER.map((option) => (
              <div key={option} onChange={() => handleFilterChange('gender', option)}>
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            value={selectedFilters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            {Object.values(FilterOptions.CATEGORY).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="select-options">
            {Object.values(FilterOptions.CATEGORY).map((option) => (
              <div key={option} onClick={() => handleFilterChange('category', option)}>
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;