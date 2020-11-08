import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "522px",
    height: "auto",
    borderRadius: "25px",
    top: "27%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 16,
    paddingBottom: 10,
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)"
  }
};

interface Props {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form?: React.ReactNode;
  icon: string;
}

const ModalTemplate: React.FC<Props> = ({
  modalIsOpen,
  setModalIsOpen,
  form,
  icon
}) => {
  const selectedIcon: string = require(`../assets/${icon}.svg`).default;
  return (
    <div>
      <div onClick={() => setModalIsOpen(true)}>
        <img src={selectedIcon} alt="" />
      </div>
      <Modal
        portalClassName="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        {form}
      </Modal>
    </div>
  );
};

export default ModalTemplate;
