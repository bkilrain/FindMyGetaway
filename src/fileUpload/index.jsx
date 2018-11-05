import React from "react";
import "./fileUpload.css";
import { Redirect } from "react-router-dom";
import utils from '../utils'

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      results: {}
    };
  }

  handleFileUpload = async (file) => {
    console.log('File Selected');
    console.log(file);
    // input Clarifai handling here

    const res = await utils.searchClarify(file);

    console.log(res)
    this.setState({shouldRedirect: true, results: res})

    
  }



  render() {
    return(
      <div class="fileUpload">
        <button class="btn">Upload a file</button>
        <input type='file' accept='image/*' onChange={(e) => this.handleFileUpload(e.target.files[0])} />
        {this.state.shouldRedirect ? <Redirect to="/search" results={this.state.results} /> : ""}
      </div>
  
    );
  };
};

export default (FileUpload);
