import React, { Component } from 'react';
import './App.css';
import TB, { withToggle } from'./components/Toggle-button';


const ToggleComponent = withToggle(({toggle: {on, toggle}}) => (  
  <button onClick={toggle}>
    {on ? "on":"of"}
  </button>
))

const EventComponent = withToggle(
  function MyEventComponent({on, toggle, event}) {
    const props ={[event]: on}
    return toggle.on ? ( <button {...props}>
      The {event} event
    </button>) : null
    
})

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
            <hr/>
            <ToggleComponent/>
            <hr/>
            <EventComponent
              event="onClick"
              on= {e=> alert(e.type)}
            />
        </TB>
      </div>
    );
  }
}

export default App;
