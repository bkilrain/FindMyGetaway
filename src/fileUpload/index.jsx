import React from "react";
import "./fileUpload.css";

const FileUpload = () => {
  const handleFileUpload = (file) => {
    console.log('File Selected');
    console.log(file);
    // input Clarifai handling here
  }

  return (

    <div class="fileUpload">
      <button class="btn">Upload a file</button>
      <input type='file' accept='image/*' onChange={(e) => handleFileUpload(e.target.files)} />
    </div>

  );
};

export default FileUpload;
