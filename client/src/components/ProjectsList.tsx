import React, { useState } from "react";
import ModalAddProject from "../modals/ModalAddProject";
import Project from "./Project";

interface Projects {
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  const listOfProjects = projects.length ? (
    projects.map((el, i) => <Project key={i} {...el} />)
  ) : (
    <div>please add project</div>
  );

  const handleSubmit = (value: Projects) => {
    return setProjects([...projects, value]);
  };

  return (
    <div>
      <div>
        <div>Projects</div>
        <ModalAddProject handleSubmit={handleSubmit} />
      </div>
      <div>
        <div>{listOfProjects}</div>
      </div>
    </div>
  );
};

export default ProjectsList;
