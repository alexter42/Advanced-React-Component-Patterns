import React, { Component } from 'react';
import './App.css';
import TB from'./components/Toggle-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Advanced React Component Patterns</h1>

          <TB onToggle={on => console.log("toggle", on)}>
            <TB.Off>The button is off </TB.Off>
            <TB.Button/>
            <div>
              <TB.On> The button is on</TB.On>
            </div>
          </TB>

        </header>
      </div>
    );
  }
}

export default App;
