import React from "react";
import Button from "./Button";
import "./css/Button.css";

interface Props {
  title: String;
  description?: String;
  image?: any;
  handleModalOpen: any;
}

const ModalView = (props: Props) => {
  return (
    <div>
      <p className="ProjectTitle">{props.title}</p>
      <hr className="LineBreak" />
      <div className="DescriptionWrapper">
        <img src={props.image} alt="" className="projectPic" />
        <p>{props.description}</p>
      </div>
      <div className="buttonWrapper">
        <Button
          text="<- back"
          background={"#ffb800"}
          onClick={() => props.handleModalOpen()}
        />
      </div>
    </div>
  );
};

export default ModalView;
