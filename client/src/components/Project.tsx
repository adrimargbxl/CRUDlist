import React from "react";

interface Props {
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

const Project: React.FC<Props> = ({ name, collaborators }) => {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{collaborators ? collaborators.length + 1 : 0} Collaborators</div>
      </div>
      <div>
        <div>add</div>
        <div>edit</div>
        <div>delete</div>
      </div>
    </div>
  );
};

export default Project;
