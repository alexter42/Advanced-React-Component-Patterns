import React, { Component } from 'react';
import './App.css';
import TB, { withToggle } from'./components/Toggle-button';


const ToggleComponent = withToggle(({on, toggle}) => (  
  <button onClick={toggle}>
    {on ? "on":"of"}
  </button>
))


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Advanced React Component Patterns</h1>
        </header>
        <TB onToggle={on => console.log("toggle", on)}>
            <TB.Button/>
            <h4>
              <TB.Off>The button is off </TB.Off> 
              <TB.On> The button is on</TB.On>
            </h4>
            <ToggleComponent/>
        </TB>
      </div>
    );
  }
}

export default App;
