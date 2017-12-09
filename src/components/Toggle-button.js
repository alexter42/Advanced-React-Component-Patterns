import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Toggle-Button.css';

const Switch = ({on,onClick}) => {
	return (
		<div className="switch" onClick={onClick}>
      <input type="checkbox" checked = {on} />
      <span className="slider round"></span>
    </div>
	)
}

const TOGGLE_CONTEXT = "__togle__"

const ToggleOn = ({toggle: {on}, children}) => {
  return on ? children : null
}

const ToggleOff = ({toggle: {on}, children}) => {
  return on ? null : children
}

const ToggleButton = ({toggle: {on, toggle}, ...props}) => {
  return (
    <Switch on={on}  onClick={toggle} {...props}/>
  )
}

export function withToggle(Component){
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return (
      <Component {...props} toggle={toggleContext} />
    )
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT] : PropTypes.object.isRequired,
  }
  return Wrapper
}

class TB extends Component {

  static On = withToggle(ToggleOn)
  static Off = withToggle(ToggleOff)
  static Button = withToggle(ToggleButton) 

  static defaultProps = {onToggle: () => {}}

  static childContextTypes = {
    [TOGGLE_CONTEXT] : PropTypes.object.isRequired,
  }

  state = {on: false}
  toggle = () => 
    this.setState(({on}) => ({on: !on}), () => {
      this.props.onToggle(this.state.on)
  })
  getChildContext(){
    return{
      [TOGGLE_CONTEXT]:{
        on: this.state.on,
        toggle: this.toggle
      }
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

export default TB;