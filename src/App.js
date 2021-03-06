import React, { Component } from "react";
import { Router } from "director/build/director";

import Login from "./Login";
import VacationCard from "./VacationCard";
import FileUpload from "./fileUpload";

import data from "./data/vacations.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faunadb_token: null
    };
  }

  renderVacationCards = () => {
    return data.vacations.map(vacation => <VacationCard {...vacation} />);
  };

  renderFileUpload = () => {
    return <FileUpload/>;
  }

  onError = err => {
    console.error(err);
  };

  onAuthChange(faunadb_token) {
    console.log("app.js onAuthChange", faunadb_token);
    this.setState({ faunadb_token });
    this.props.model.onAuthChange(faunadb_token);
  }

  render() {
    return (
      <div>
        <header className="header">
          <Login
            model={this.props.model}
            onError={this.onError.bind(this)}
            onAuthChange={this.onAuthChange.bind(this)}
          />
          {this.state.faunadb_token ? this.renderFileUpload() : ""}
          {this.state.faunadb_token ? this.renderVacationCards() : ""}
        </header>
      </div>
    );
  }
}

export default App;
