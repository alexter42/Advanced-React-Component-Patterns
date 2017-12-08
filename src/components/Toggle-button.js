import React, { Component } from 'react';
import './Toggle-Button.css';

const Switch = ({on,onClick}) => {
	return (
		<div className="switch" onClick={onClick}>
      <input type="checkbox" checked = {on} />
      <span className="slider round"></span>
      </div>
	)
}


class TB extends Component {
  state = {on: false}
  toggle = () => 
    this.setState(({on}) => ({on: !on}), () => {
      this.props.onToggle(this.state.on)
  })
  render() {
    const {on} = this.state
    return (    
      <Switch on={on}  onClick={this.toggle}/>
    );
  }
}

export default TB;