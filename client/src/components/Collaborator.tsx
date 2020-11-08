import React from "react";

interface Projects {
  name: string;
  email: string;
}

interface Props {
  projectItem: Projects;
}

const Collaborator: React.FC<Props> = ({ projectItem }) => {
  return <div>{projectItem.email}</div>;
};

export default Collaborator;
