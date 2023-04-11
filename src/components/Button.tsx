import React from "react";
import "./css/Button.css";

interface Props {
  text: string;
  background: string;
  onClick: any;
}

const Button = (props: Props) => {

  return (
    <button
      style={{
        background: props.background,
        borderColor: props.background,
      }}
      className="Button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
