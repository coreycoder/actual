// ReceiptSearch.tsx
import React, { useState } from 'react';

const ReceiptSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    // const response = await fetch(`/api/receipts/search?q=${encodeURIComponent(query)}`);
    // const data = await response.json();
    // setResults(data.receipts);
  };

  return (
    <div>
      <h2>Search Receipts</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search OCR text"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((receipt) => (
          <div key={receipt.id}>
            <img src={receipt.file_path} alt="Receipt" style={{ width: '100px' }} />
            <div>{receipt.ocr_text.substring(0, 100)}...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptSearch;
