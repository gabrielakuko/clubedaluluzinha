import React from 'react'
import { Link } from 'react-router-dom'; // Importando react router dom


import './ButtonLink.css'

const ButtonLink = props => {
  return (
    <Link to={props.path} className={props.color} onClick={props.onClick}>{props.text}</Link>
  );
}

export default ButtonLink