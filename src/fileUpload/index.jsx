import React from "react";

const FileUpload = () => {
  const handleFileUpload = (file) => {
    console.log('File Selected');
    console.log(file);
    // input Clarifai handling here
  }

  return (
    <input type='file' accept='image/*' onChange={(e) => handleFileUpload(e.target.files)} />
  );
};

export default FileUpload;
