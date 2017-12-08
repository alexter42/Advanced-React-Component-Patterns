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


function ToggleOn({on, children}) {
  return on ? children : null
}

function ToggleOff({on, children}) {
  return on ? null : children
}

function ToggleButton({on, toggle, ...props}) {
  return (
    <Switch on={on}  onClick={toggle} {...props}/>
  )
}

class TB extends Component {

  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton 

  static defaultProps = {onToggle: () => {}}
  state = {on: false}
  toggle = () => 
    this.setState(({on}) => ({on: !on}), () => {
      this.props.onToggle(this.state.on)
  })
  render() {
    const children = React.Children.map(
      this.props.children,
      child =>
      React.cloneElement(child,
      {
        on: this.state.on,
        toggle: this.toggle
      })
    )
    return <div>{children}</div>
  }
}

export default TB;