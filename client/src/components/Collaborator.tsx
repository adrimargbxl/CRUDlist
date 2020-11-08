import React from "react";
import { CollaboratorType } from "../types";

interface Props {
  projectItem: CollaboratorType;
  projectID: string;
  handleDeleteCollaborator: (id: string, email: string) => void;
}

const Collaborator: React.FC<Props> = ({
  projectItem,
  projectID,
  handleDeleteCollaborator
}) => {
  return (
    <div className="CollaboratorContainer">
      <div>
        <img src={projectItem.image} alt="avatar" />
      </div>
      <div className="CollaboratorDetails">
        <div>{projectItem.name}</div>
        <div>{projectItem.email}</div>
      </div>
      <div
        onClick={() => handleDeleteCollaborator(projectID, projectItem.email)}
        className="collaboratorDelete"
      >
        Delete
      </div>
    </div>
  );
};

export default Collaborator;
