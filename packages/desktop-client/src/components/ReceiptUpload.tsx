// ReceiptUpload.tsx
import React, { useState } from 'react';

const ReceiptUpload: React.FC = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadResults, setUploadResults] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files) return;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('receipts', files[i]);
    }
    // const response = await fetch('/api/receipts/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
    // const data = await response.json();
    // setUploadResults(data.receipts);
  };

  return (
    <div>
      <h2>Upload Receipts</h2>
      <input type="file" multiple onChange={handleFileChange} accept="image/*" />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {uploadResults.map((result, idx) => (
          <div key={idx}>
            {result.file}: {result.status}{" "}
            {result.categorySuggestion && ` (Suggested: ${result.categorySuggestion})`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptUpload;
