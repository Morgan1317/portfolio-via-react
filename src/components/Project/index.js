import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [project] = useState([
    {
        title: 'Recipe Box',
        languages: ['Javascript','CSS','HTML'],
        github: "https://github.com/AHudg/recipe-box",
        deploy:"https://ahudg.github.io/recipe-box"
    },

  ]);


  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {project.map((project, i) => (
          <img
            src={require(`../../assets/images/${i}.jpg`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(project, i)}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
