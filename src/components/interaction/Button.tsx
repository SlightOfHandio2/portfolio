import React from 'react';
import "./css/Button.css"

interface Props {
  text: String
}

const Button = (props: Props) => {
  return (
    <button className='Button'> {props.text} </button>
  );
}

export default Button;
