import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('Component did mounted!')

    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="card dark shadow rounded">
            <div className="card-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Hello World!</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
