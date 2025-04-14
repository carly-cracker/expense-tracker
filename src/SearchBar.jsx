import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or category"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        marginBottom: "10px",
        padding: "5px",
        width: "100%",
        borderRadius: "5px"
      }}
    />
  );
};

export default SearchBar;
