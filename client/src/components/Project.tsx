import React, { useState } from "react";
import AddOrEditProject from "../forms/AddOrEditProject";
import ModalTemplate from "../modals/ModalTemplate";
import "./Project.css";
import CollaboratorList from "./CollaboratorList";
import { ProjectType, CollaboratorType } from "../types";

interface Props {
  projectItem: ProjectType;
  handleDelete: (id: string) => void;
  handleSubmit: (value: ProjectType) => void;
  handleAddCollaborator: (id: string, value: CollaboratorType) => void;
  handleDeleteCollaborator: (id: string, email: string) => void;
}

const Project: React.FC<Props> = ({
  projectItem,
  handleDelete,
  handleSubmit,
  handleAddCollaborator,
  handleDeleteCollaborator
}) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [collaboratorModalIsOpen, setCollaboratorModalIsOpen] = useState<
    boolean
  >(false);
  const deleteIcon: string = require("../assets/delete.svg").default;
  return (
    <div className="projectContainer">
      <div>
        <div className="project__title">{projectItem.name}</div>
        <div className="project__collaborators">
          {projectItem.collaborators ? projectItem.collaborators.length : 0}{" "}
          {projectItem.collaborators.length === 1
            ? "collaborator"
            : "collaborators"}
        </div>
      </div>
      <div className="projectOptions">
        <div className="projectOptions__icon">
          <ModalTemplate
            modalIsOpen={collaboratorModalIsOpen}
            setModalIsOpen={setCollaboratorModalIsOpen}
            icon="addCollaborator"
            form={
              <CollaboratorList
                setCollaboratorModalIsOpen={setCollaboratorModalIsOpen}
                projectItem={projectItem}
                handleAddCollaborator={handleAddCollaborator}
                handleDeleteCollaborator={handleDeleteCollaborator}
              />
            }
          />
        </div>
        <div className="projectOptions__icon">
          <ModalTemplate
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            icon="edit"
            form={
              <AddOrEditProject
                title='Edit "Project Name"'
                setModalIsOpen={setModalIsOpen}
                handleSubmit={handleSubmit}
                projects={projectItem}
                buttonText="Edit Project"
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
          <img src={deleteIcon} alt="deleteIcon" />
        </div>
      </div>
    </div>
  );
};

export default Project;
