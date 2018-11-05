import React from "react";
import "./fileUpload.css";
import { Redirect } from "react-router-dom";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false
    };
  }

  handleFileUpload = (file) => {
    console.log('File Selected');
    console.log(file);
    // input Clarifai handling here

    setTimeout(() => {
      this.setState({shouldRedirect: true})
    },(2000));
    
  }



  render() {
    return(
      <div class="fileUpload">
        <button class="btn">Upload a file</button>
        <input type='file' accept='image/*' onChange={(e) => this.handleFileUpload(e.target.files)} />
        {this.state.shouldRedirect ? <Redirect to="/search" /> : ""}
      </div>
  
    );
  };
};

export default (FileUpload);
