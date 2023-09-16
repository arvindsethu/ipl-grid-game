import React, { FC, useState, useEffect } from 'react';
import PlayerSearch from '../PlayerSearch/PlayerSearch';  // adjust this import based on where you save PlayerSearch.tsx
import { readCSV } from '../readCSV/readCSV';  // adjust this import based on where you save readCSV.ts

interface PlayerBoxProps {
  playerName?: string;
  playerImage?: string;
  popularityScore?: number;
}

const PlayerBox: FC<PlayerBoxProps> = () => {
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const names = await readCSV('./FINAL_DATA_TABLE.csv'); // Here is your file path
      console.log("Loaded player names:", names);  // Debugging line
      setPlayerNames(names);
    };

    fetchCSV();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Further logic to handle search query
  };

  return (
    <div>
      <div 
        className="sm:rounded-tr-lg group relative bg-no-repeat bg-center bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 w-100 h-100"
        onClick={() => setIsPlayerSelected(!isPlayerSelected)}
      >
        {
          isPlayerSelected && <span>selected</span>
        }
      </div>
      {isPlayerSelected && <PlayerSearch onSearch={handleSearch} suggestions={playerNames} />}
    </div>
  );
};

export default PlayerBox;
