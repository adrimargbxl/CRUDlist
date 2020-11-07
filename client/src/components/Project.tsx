import React, { useState } from "react";
import AddProject from "../forms/AddProject";
import ModalTemplate from "../modals/ModalTemplate";
import "./Project.css";

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
  projectItem: Projects;
  handleDelete: (id: string) => void;
  handleSubmit: (value: Projects) => void;
}

const Project: React.FC<Props> = ({
  projectItem,
  handleDelete,
  handleSubmit
}) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const deleteIcon: string = require("../assets/delete.svg").default;
  const addCollaboratorIcon: string = require("../assets/addCollaborator.svg")
    .default;
  return (
    <div className="projectContainer">
      <div className="project">
        <div className="project__title">{projectItem.name}</div>
        <div className="project__collaborators">
          {projectItem.collaborators ? projectItem.collaborators.length + 1 : 0}{" "}
          Collaborators
        </div>
      </div>
      <div className="projectOptions">
        <div className="projectOptions__icon">
          <img src={addCollaboratorIcon} alt="" />
        </div>
        <div className="projectOptions__icon">
          <ModalTemplate
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            icon={"edit"}
            form={
              <AddProject
                title="Edit Project Name"
                setModalIsOpen={setModalIsOpen}
                handleSubmit={handleSubmit}
                projects={projectItem}
              />
            }
          />
        </div>
        <div
          onClick={() => {
            handleDelete(projectItem.id);
          }}
          className="projectOptions__icon"
        >
          <img src={deleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
