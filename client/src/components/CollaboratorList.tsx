import React from "react";
import "./CollaboratorList.css";
import AddCollaborator from "../forms/AddCollaborator";
import Collaborator from "./Collaborator";
import { ProjectType, CollaboratorType } from "../types";

interface Props {
  projectItem: ProjectType;
  handleAddCollaborator: (id: string, value: CollaboratorType) => void;
  handleDeleteCollaborator: (id: string, email: string) => void;
  setCollaboratorModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const closeIcon: string = require("../assets/close.svg").default;

const CollaboratorList: React.FC<Props> = ({
  projectItem,
  handleAddCollaborator,
  handleDeleteCollaborator,
  setCollaboratorModalIsOpen
}) => {
  const [showForm, setShowForm] = React.useState<{
    status: boolean;
    hide: string;
  }>({ status: false, hide: "" });
  const listOfCollaborators = projectItem.collaborators.length ? (
    projectItem.collaborators.map((item, i) => {
      return (
        <Collaborator
          key={i}
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
      <div className="collaborator__header">
        <div className="collaborators__title">User Settings</div>
        <div
          className="collaborators__close"
          onClick={() => setCollaboratorModalIsOpen(false)}
        >
          <img src={closeIcon} alt="closeIcon" />
        </div>
      </div>
      <div className="collaboratorList">{listOfCollaborators}</div>
      <div
        className="footer"
        onClick={(e) => {
          e.preventDefault();
          setShowForm({ status: true, hide: "none" });
        }}
      >
        <div
          style={{
            fontSize: "12px",
            justifyContent: "center",
            cursor: "pointer",
            display: showForm.hide,
            marginTop: "20px",
            fontWeight: "normal"
          }}
        >
          Invite new users
        </div>
      </div>
      {showForm.status ? (
        <AddCollaborator
          handleAddCollaborator={handleAddCollaborator}
          projectItem={projectItem}
        />
      ) : null}
    </div>
  );
};

export default CollaboratorList;
