import React, { useState } from "react";
import faker from "faker";
import "./ProjectList.css";
import ModalTemplate from "../modals/ModalTemplate";
import Project from "./Project";
import AddOrEditProject from "../forms/AddOrEditProject";
import { ProjectType, CollaboratorType } from "../types";

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleSubmit = (value: ProjectType) => {
    if (value.id) {
      const newProjects = projects.map((project) => {
        return project.id === value.id ? value : project;
      });
      setProjects([...newProjects]);
    } else {
      value.id = Math.random().toString(36).substr(2, 9);
      setProjects([...projects, value]);
    }
  };

  const handleDelete = (id: string) => {
    setProjects(
      projects.filter((project) => {
        return project.id !== id;
      })
    );
  };

  const handleAddCollaborator = (id: string, value: CollaboratorType) => {
    const newProjectsArr = projects.map((project) => {
      if (project.id === id) {
        project.collaborators.push(value);
        return project;
      }
      return project;
    });
    setProjects([...newProjectsArr]);
  };

  const handleDeleteCollaborator = (id: string, email: string) => {
    const newProjectsArr = [];
    for (const project of projects) {
      if (project.id === id) {
        const newArr = project.collaborators.filter(
          (obj) => obj.email !== email
        );
        project.collaborators = newArr;
      }
      newProjectsArr.push(project);
    }
    setProjects([...newProjectsArr]);
  };

  const listOfProjects = projects.length ? (
    projects.map((project, i) => (
      <Project
        key={i}
        handleDelete={handleDelete}
        projectItem={project}
        handleSubmit={handleSubmit}
        handleAddCollaborator={handleAddCollaborator}
        handleDeleteCollaborator={handleDeleteCollaborator}
      />
    ))
  ) : (
    <div>please add project</div>
  );

  return (
    <div className="listContainer">
      <div className="listContainer__header">
        <div className="listContainer__header__title">Projects</div>
        <div>
          <ModalTemplate
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            icon={"plus"}
            form={
              <AddOrEditProject
                buttonText={"Add Project"}
                title={"Add Project"}
                setModalIsOpen={setModalIsOpen}
                handleSubmit={handleSubmit}
              />
            }
          />
        </div>
      </div>
      <div>{listOfProjects}</div>
    </div>
  );
};

export default ProjectsList;
