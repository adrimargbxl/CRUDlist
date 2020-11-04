import React, {useState} from 'react'

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState([])

  return (
    <div>
      <div>
        <div>Projects</div>
        <div>+</div>
      </div>
      <div>
        <div>list of projects</div>
      </div>
    </div>
  )
}

export default ProjectsList;
