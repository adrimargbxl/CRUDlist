import React, { useState } from "react";
import "./ProjectList.css";
import ModalAddProject from "../modals/ModalAddProject";
import Project from "./Project";

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  const handleSubmit = (value: Projects) => {
    value.id = Math.random().toString(36).substr(2, 9);
    setProjects([...projects, value]);
  };

  const handleDelete = (id: string) => {
    setProjects(
      projects.filter((project) => {
        return project.id !== id;
      })
    );
  };

  const listOfProjects = projects.length ? (
    projects.map((el, i) => (
      <Project key={i} handleDelete={handleDelete} {...el} />
    ))
  ) : (
    <div>please add project</div>
  );

  return (
    <div className="listContainer">
      <div className="listContainer__header">
        <div className="listContainer__header__title">Projects</div>
        <div className="listContainer__header__modal">
          <ModalAddProject handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="listContainer__list">{listOfProjects}</div>
    </div>
  );
};

export default ProjectsList;
