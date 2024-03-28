import React, { createContext, useContext, useState } from 'react';

const SearchHistoryContext = createContext();

export const useSearchHistory = () => useContext(SearchHistoryContext);

export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addToHistory = (query) => {
    setSearchHistory(prevHistory => [...prevHistory, query]);
  };

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addToHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export default SearchHistoryContext;
