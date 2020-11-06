import React from "react";
import "./Project.css";

interface Props {
  id: string;
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
  handleDelete: (id: string) => void;
}

const Project: React.FC<Props> = ({
  id,
  name,
  collaborators,
  handleDelete
}) => {
  const deleteIcon: string = require("../assets/delete.svg").default;
  const addCollaboratorIcon: string = require("../assets/addCollaborator.svg")
    .default;
  const editIcon: string = require("../assets/edit.svg").default;
  return (
    <div className="projectContainer">
      <div className="project">
        <div className="project__title">{name}</div>
        <div className="project__collaborators">
          {collaborators ? collaborators.length + 1 : 0} Collaborators
        </div>
      </div>
      <div className="projectOptions">
        <div className="projectOptions__icon">
          <img src={addCollaboratorIcon} alt="" />
        </div>
        <div className="projectOptions__icon">
          <img src={editIcon} alt="" />
        </div>
        <div
          onClick={() => {
            handleDelete(id);
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
