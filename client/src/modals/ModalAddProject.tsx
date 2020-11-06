import React, { useState } from "react";
import Modal from "react-modal";
import "./ModalAddProject.css";
import AddProject from "../forms/AddProject";

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

interface Props {
  handleSubmit: (value: Projects) => void;
}

const ModalAddProject: React.FC<Props> = ({ handleSubmit }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const plusIcon: string = require("../assets/plus.svg").default;
  return (
    <div>
      <div onClick={() => setModalIsOpen(true)}>
        {" "}
        <img src={plusIcon} alt="" />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <button onClick={() => setModalIsOpen(false)}>X</button>
        <AddProject
          setModalIsOpen={setModalIsOpen}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
};

export default ModalAddProject;
