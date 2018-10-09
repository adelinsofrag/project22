import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/boostrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header gunmetal-background">

          <div className="card gunmetal-background rounded shadow">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello<span className="lime-text">World!</span></h1>
            <p>Save and reload.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
