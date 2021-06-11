import React, { useState } from "react";

function SearchBar({
  handleSearch,
  placeholder,
}: {
  handleSearch: Function;
  placeholder: string;
}) {
  const [searchRequest, setSearchRequest] = useState("");

  const searchOnReturnKeyPress = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      handleSearch(searchRequest);
    }
  };

  return (
    <div className="flex my-4 lg:mb-8">
      <input
        className="flex-grow border-2 border-grey rounded-md p-1 mr-2"
        value={searchRequest}
        placeholder={placeholder}
        onChange={(e) => setSearchRequest(e.target.value)}
        onKeyDown={searchOnReturnKeyPress}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSearch(searchRequest)}
      >
        Search!
      </button>
    </div>
  );
}

export default SearchBar;
