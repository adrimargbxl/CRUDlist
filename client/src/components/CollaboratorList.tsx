import React from "react";
import AddCollaborator from "../forms/AddCollaborator";
import Collaborator from "./Collaborator";

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators: {
    name: string;
    email: string;
  }[];
}

interface CollaboratorProp {
  name: string;
  email: string;
}

interface Props {
  projectItem: Projects;
  handleAddCollaborator: (id: string, value: CollaboratorProp) => void;
}

const CollaboratorList: React.FC<Props> = ({
  projectItem,
  handleAddCollaborator
}) => {
  const listOfCollaborators = projectItem.collaborators ? (
    projectItem.collaborators.map((item) => {
      return <Collaborator projectItem={item} />;
    })
  ) : (
    <div>no collaborators</div>
  );

  return (
    <div>
      <div className="collaborators__title">User Settings</div>
      <div>{listOfCollaborators}</div>
      <AddCollaborator
        handleAddCollaborator={handleAddCollaborator}
        projectItem={projectItem}
      />
    </div>
  );
};

export default CollaboratorList;
