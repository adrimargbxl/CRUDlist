import React from "react";
import ProjectsList from "./components/ProjectsList";
import Title from "./components/Title";

const App: React.FC = () => {
  return (
    <div>
      <Title />
      <ProjectsList />
    </div>
  );
};

export default App;
