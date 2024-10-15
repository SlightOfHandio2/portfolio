import React from "react";
import "./css/Button.css";

interface Props {
  text: string;
  background: string;
  onClick: () => void;
  className?: string; // Optional className prop for extra styling
}

const Button = (props: Props) => {
  return (
    <button
      style={{
        background: props.background,
        borderColor: props.background,
      }}
      className={`Button ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
