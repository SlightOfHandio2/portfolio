import React from 'react';
import "./css/Button.css"

interface Props {
  text: string
  background: string
}

const Button = (props: Props) => {
  return (
    <button 
      style={{
        background: props.background,
        borderColor: props.background,
      }}
      className='Button'

    > 
      {props.text} 
    </button>
  );
}

export default Button;
