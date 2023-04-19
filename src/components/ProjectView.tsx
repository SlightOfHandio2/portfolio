import React, { useState } from "react";
import ModalView from "./ModalView";
import "./css/ProjectView.css";
import "./css/Modal.css";
import Modal from "react-modal";

interface Props {
  background: String;
  title: String;
  description?: String;
  image?: any;
  children: any;
}

const ProjectView = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(!open);
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "unset" : "hidden";
  };

  return (
    <>
      <div onClick={handleModalOpen} className={"Holder " + props.background}>
        <div className="ContentWrapper">
          <p
            className="MiniTitle"
            style={{ paddingBottom: props.children ? "10px" : "20px" }}
          >
            {props.title}
          </p>
          {props.children && <div className="TagWrapper">{props.children}</div>}
        </div>
        <div className="fadeHolder"></div>
        <div className="fadeHolder2"></div>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={handleModalOpen}
        className="Modal"
        overlayClassName="Overlay"
        preventScroll={true}
      >
        <ModalView
          title={props.title}
          description={props.description}
          image={props.image}
          handleModalOpen={handleModalOpen}
        />
      </Modal>
    </>
  );
};

export default ProjectView;
