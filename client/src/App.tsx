import React from "react";
import "./App.css";
import ProjectsList from "./components/ProjectsList";
import Title from "./components/Title";

const App: React.FC = () => {
  return (
    <div className="body">
      <Title />
      <ProjectsList />
    </div>
  );
};

export default App;
