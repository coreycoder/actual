import { useCallback, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
// import { uploadFile } from '../api/firebaseStorage';
import { DocumentContext } from './DocumentContext';

export default function MyDropzone() {
  const [progress, setProgress] = useState(0);
  // const { fileDetails } = useContext(DocumentContext);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // 'image' is the key on the backend

    try {
      // Send the file to your API endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // Do not set Content-Type header here; the browser will automatically set it including the boundaries.
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      console.log('Upload successful:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    // uploadFile(file, setProgress, fileDetails);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='flex flex-col items-center p-20 mx-5 border-4 border-dashed rounded-sm h-5/6'>
        <div className='flex flex-col h-200 align-content-center'>
          <button className='p-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-400'>
            Drag n drop some files here, or click to select files
          </button>
          <h3 className='self-center mt-5'>Uploaded {progress}%</h3>
        </div>
      </div>
    </div>
  );
}