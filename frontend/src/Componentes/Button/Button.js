import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './Button.css'

const Button = props => {
  if (!props.path || typeof props.path === 'string') {
    return (
      <a href={props.path} className={props.color} onClick={props.onClick}>{props.text}</a>
    );  
  }

  return (
    <Link to={props.path} className={props.color} onClick={props.onClick}>{props.text}</Link>
  );
}

export default Button