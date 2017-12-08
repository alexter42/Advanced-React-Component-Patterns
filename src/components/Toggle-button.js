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

function ToggleOn({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? children : null
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT] : PropTypes.object.isRequired,
}

function ToggleOff({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? null : children
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT] : PropTypes.object.isRequired,
}

function ToggleButton(props, context) {
  const {on, toggle} = context[TOGGLE_CONTEXT]
  return (
    <Switch on={on}  onClick={toggle} {...props}/>
  )
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT] : PropTypes.object.isRequired,
}

class TB extends Component {

  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton 

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