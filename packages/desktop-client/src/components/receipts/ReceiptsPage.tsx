import React, { type CSSProperties, useEffect, useMemo, useState } from 'react';
import Dropzone from './Dropzone';
import { DocumentContext } from './DocumentContext';

export function ReceiptsPage() {
  const hi = 'hello world';

  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [activeDocumentId, setActiveDocumentId] = useState(null);
  const [fileDetails, setFileDetails] = useState([]);
  const activeDocument = useMemo(() => documents.find((doc) => doc?.id === activeDocumentId), [activeDocumentId, documents]);
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch('https://your-backend.com/api/documents');
        const data = await res.json();
        console.log(data);
        setDocuments(data);
        setFilteredDocuments(data);

        // Optionally set active document if not already set.
        if (!activeDocument && data.length > 0) {
          setActiveDocumentId(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    // Initial fetch
    fetchDocuments();

    // Poll every 5 seconds (adjust as needed)
    const intervalId = setInterval(fetchDocuments, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [activeDocument]);

  return (
    <DocumentContext.Provider
      value={{
        documents,
        filteredDocuments,
        setFilteredDocuments,
        activeDocumentId,
        setActiveDocumentId,
        fileDetails,
        setFileDetails,
        // activeDocument,
        // setActiveDocument
        // gridView,
        // setGridView,
      }}>
      <div><Dropzone /></div>
    </DocumentContext.Provider>
  );
}
