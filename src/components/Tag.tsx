import React from "react";
import "./css/Tag.css";

interface Props {
  color?: string;
  text: string;
  background: string;
}

const Tag = (props: Props) => {
  console.log(props);
  console.log(props.color ? props.color : "#160828")
  return (
    <p
      className="Tag"
      style={{
        background: props.background,
        color: props.color ? props.color : "#160828",
      }}
    >
      {props.text}
    </p>
  );
};

export default Tag;
