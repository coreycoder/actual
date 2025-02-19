// UnlinkedReceipts.tsx
import React, { useState, useEffect } from 'react';

interface Receipt {
  id: number;
  file_path: string;
  ocr_text: string;
}

const UnlinkedReceipts: React.FC<{ transactionId: number }> = ({ transactionId }) => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  const fetchUnlinked = async () => {
    // const response = await fetch('/api/receipts/unlinked');
    // const data = await response.json();
    // setReceipts(data.receipts);
  };

  useEffect(() => {
    fetchUnlinked();
  }, []);

  const linkReceipt = async (receiptId: number) => {
    // await fetch(`/api/receipts/${receiptId}/link`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ transactionId }),
    // });
    // fetchUnlinked();
  };

  return (
    <div>
      <h3>Unlinked Receipts</h3>
      <ul>
        {receipts.map((receipt) => (
          <li key={receipt.id}>
            <img src={receipt.file_path} alt="Receipt" style={{ width: '100px' }} />
            <div>{receipt.ocr_text.substring(0, 50)}...</div>
            <button onClick={() => linkReceipt(receipt.id)}>Link to Transaction</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnlinkedReceipts;
