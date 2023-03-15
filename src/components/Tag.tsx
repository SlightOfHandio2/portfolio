import React from 'react';
import "./css/Tag.css"

interface Props {
  text: string
  background: string
}

const Tag = (props: Props) => {
  return (
    <p 
      className='Tag' 
      style={{
        background: props.background
      }}
    > 
      {props.text} 
    </p>
  );
}

export default Tag;
