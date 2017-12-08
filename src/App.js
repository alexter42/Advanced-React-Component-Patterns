import React, { Component } from 'react';
import './App.css';
import TB from'./components/Toggle-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Advanced React Component Patterns</h1>
          <TB onToggle={on => alert(on)}/>
        </header>
      </div>
    );
  }
}

export default App;
