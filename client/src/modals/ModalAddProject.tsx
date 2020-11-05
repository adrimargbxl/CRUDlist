import React, { useState } from "react";
import Modal from "react-modal";
import AddProject from "../forms/AddProject";

interface Projects {
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

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>+</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <button onClick={() => setModalIsOpen(false)}>X</button>
        <AddProject handleSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default ModalAddProject;
