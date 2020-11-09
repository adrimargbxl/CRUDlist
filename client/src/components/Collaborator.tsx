import React from "react";
import faker from "faker";
import "./Collaborator.css";
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
    <div className="collaboratorBox">
      <div className="collaboratorContainer">
        <img
          className="collaboratorImage"
          src={faker.image.avatar()}
          alt="avatar"
        />
        <div className="collaboratorDetails">
          <div className="collaboratorDetails__title">
            {faker.name.findName()}
          </div>
          <div className="collaboratorDetails__email">{projectItem.email}</div>
        </div>
      </div>
      <div>
        <div
          className="collaboratorDelete"
          onClick={() => handleDeleteCollaborator(projectID, projectItem.email)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
