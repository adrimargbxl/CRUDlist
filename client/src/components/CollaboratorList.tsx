import React from "react";
import "./CollaboratorList.css";
import AddCollaborator from "../forms/AddCollaborator";
import Collaborator from "./Collaborator";
import { ProjectType, CollaboratorType } from "../types";

interface Props {
  projectItem: ProjectType;
  handleAddCollaborator: (id: string, value: CollaboratorType) => void;
  handleDeleteCollaborator: (id: string, email: string) => void;
}

const CollaboratorList: React.FC<Props> = ({
  projectItem,
  handleAddCollaborator,
  handleDeleteCollaborator
}) => {
  const listOfCollaborators = projectItem.collaborators.length ? (
    projectItem.collaborators.map((item) => {
      return (
        <Collaborator
          projectItem={item}
          projectID={projectItem.id}
          handleDeleteCollaborator={handleDeleteCollaborator}
        />
      );
    })
  ) : (
    <div className="noItem">no collaborators</div>
  );
  return (
    <div>
      <div className="collaborators__title">User Settings</div>
      <div className="collaboratorList">{listOfCollaborators}</div>
      <AddCollaborator
        handleAddCollaborator={handleAddCollaborator}
        projectItem={projectItem}
      />
    </div>
  );
};

export default CollaboratorList;
