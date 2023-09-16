import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const TestCSV: React.FC = () => {
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  useEffect(() => {
    const readCSV = async () => {
      try {
        const response = await fetch('/FINAL_DATA_TABLE.csv');
        const reader = response.body?.getReader();
        const result = await reader?.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result?.value);

        const parseResult = Papa.parse(csv, { header: true });
        const names = parseResult.data.map((row: any) => row['player_name']).filter(Boolean);
        setPlayerNames(names);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    readCSV();
  }, []);

  return (
    <div>
      <h1>Testing CSV</h1>
      <ul>
        {playerNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestCSV;
