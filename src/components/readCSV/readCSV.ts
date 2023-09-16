import Papa from 'papaparse';

export const readCSV = async (filePath: string) => {
  const response = await fetch(filePath);
  const reader = response.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result?.value);
  const results = Papa.parse(csv, { header: true });
  return results.data.map((row: any) => row['Player_name']).filter(Boolean);  // Only returning 'Player_name' and filtering out any falsy values like undefined, null, or empty strings
};
