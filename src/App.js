import React, { Component } from 'react';
import { Router } from 'director/build/director';

import Login from './Login';
import VacationCard from './VacationCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        faunadb_token : null
    }
  }

  render () {
    return (
      <div>
        <header className="header">
          {/* <Login model={this.props.model} onError={this.onError.bind(this)} onAuthChange={this.onAuthChange.bind(this)} /> */}
          {this.state.faunadb_token ? VacationCard : ''}
        </header>
      </div>
    );
  }
}

export default App;
