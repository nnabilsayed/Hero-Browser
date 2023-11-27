import React from "react";

type SearchProps = {
  searchTerm: string;
  handleSearch: (searchQuery: string) => void;
};

const SearchComponent: React.FC<SearchProps> = ({
  searchTerm,
  handleSearch,
}) => {
  return (
    <div
      className="search-container"
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <input
        type="text"
        placeholder="Search for a character..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="p-2 border rounded-md w-full"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default SearchComponent;
