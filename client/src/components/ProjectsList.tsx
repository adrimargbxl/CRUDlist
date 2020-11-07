import React, { useState } from "react";
import "./ProjectList.css";
import ModalTemplate from "../modals/ModalTemplate";
import Project from "./Project";
import AddProject from "../forms/AddProject";

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
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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
    projects.map((project, i) => (
      <Project
        key={i}
        handleDelete={handleDelete}
        projectItem={project}
        handleSubmit={handleSubmit}
      />
    ))
  ) : (
    <div>please add project</div>
  );

  return (
    <div className="listContainer">
      <div className="listContainer__header">
        <div className="listContainer__header__title">Projects</div>
        <div className="listContainer__header__modal">
          <ModalTemplate
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            icon={"plus"}
            form={
              <AddProject
                title={"Add Project"}
                setModalIsOpen={setModalIsOpen}
                handleSubmit={handleSubmit}
              />
            }
          />
        </div>
      </div>
      <div className="listContainer__list">{listOfProjects}</div>
    </div>
  );
};

export default ProjectsList;
