import React from 'react';

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {


  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        id="search"
        value={query}
        
        className="w-full p-4 pl-10 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 shadow-lg"
        placeholder="Recherche"
      />
      <svg
        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m1.65-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
