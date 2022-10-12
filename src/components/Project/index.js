import React, { useState } from 'react';
import Modal from '../Modal';
import Image from '../../assets/images/0.jpg';



const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [project] = useState([
    {
        title: 'Recipe Box',
        languages: ['Javascript ','CSS ','HTML'],
        github: "https://github.com/AHudg/recipe-box",
        deploy:"https://ahudg.github.io/recipe-box"
      },
      {
        title: 'Gauge Your Coworker',
        languages: ['Javascript ','Handlebars ','CSS '],
        github: "https://github.com/Morgan1317/Gauge-your-coworker",
        deploy:"https://boiling-lowlands-04909.herokuapp.com/"
      },
      {
        title: 'Run Buddy',
        languages: ['HTML'],
        github: "https://github.com/Morgan1317/run-buddy",
        deploy:"https://morgan1317.github.io/run-buddy/"
      },
      {
        title: 'Whats the Weather Like',
        languages: ['Javascript ','CSS ','HTML'],
        github: "https://github.com/Morgan1317/Whats-the-weather-like-C6",
        deploy:"https://morgan1317.github.io/Whats-the-weather-like-C6/"
      },
      {
        title: 'Testing your coding knowledge',
        languages: ['Javascript ','CSS ','HTML'],
        github: "https://github.com/Morgan1317/Testing-Your-Coding-Knowledge-C4",
        deploy:"https://morgan1317.github.io/Testing-Your-Coding-Knowledge-C4/"
      },
      {
        title: 'Lets Blog CMS Style',
          languages: ['JavaScript ', 'Handlebars',
          'CSS'],
        github: "https://github.com/Morgan1317/lets-blog-CMS-style-C14",
        deploy:"https://desolate-fortress-54377.herokuapp.com/"
    },

  ]);


  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, i: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="row text-center">
        {project.map((project, i) => (
          <img
            src={Image}
            alt={project.title}
            onClick={() => toggleModal(project, i)}
            key={project.title}
            className="col-12"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
