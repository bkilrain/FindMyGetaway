import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import VacationCard from "./VacationCard";
import ContactForm from "./contactform";
import LandingPage from './landing'
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

  renderLandingPage = () => {
    return <LandingPage />
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
          <Route exact path="/" component={this.renderLandingPage} />
          <Route path="/search" component={this.renderVacationCards} />
          <Route path="/contact" component={ContactForm} />
        </header>
        <ContactForm/>
      </div>
    );
  }
}

export default App;
