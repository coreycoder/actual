// EditOCRText.tsx
import React, { useState } from 'react';

interface EditOCRTextProps {
  receiptId: number;
  initialText: string;
}

const EditOCRText: React.FC<EditOCRTextProps> = ({ receiptId, initialText }) => {
  const [text, setText] = useState(initialText);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // await fetch(`/api/receipts/${receiptId}/ocr`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ocr_text: text }),
    // });
    setSaving(false);
  };

  return (
    <div>
      <h3>Edit OCR Text</h3>
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} cols={50} />
      <button onClick={handleSave} disabled={saving}>
        Save
      </button>
    </div>
  );
};

export default EditOCRText;
