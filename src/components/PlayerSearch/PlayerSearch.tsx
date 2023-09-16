import React, { FC, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions: string[];
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, suggestions = [] }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);

    console.log(suggestions);  // Debugging line

    const filtered = suggestions.filter((suggestion) => {
      if (suggestion) {
        const lowerCaseSuggestion = suggestion.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        return lowerCaseSuggestion.includes(lowerCaseQuery);
      }
      return false;
    });

    setFilteredSuggestions(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search player..." 
        onChange={handleChange}
      />
      <div>
        {filteredSuggestions.map((suggestion, index) => (
          <div key={index}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
