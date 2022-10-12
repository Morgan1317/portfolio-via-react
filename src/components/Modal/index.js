import React from 'react';


const Modal = ({ onClose, currentProject }) => {
  const { title, languages, github, deploy, i } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title} </h3>
        <img
        src={require(`../../assets/images/${i}.jpg`).default}
          alt={title}
        />
              <p>{languages}</p>
              <span><a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >Github </a></span>
            
         
          <a
            href={deploy}
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed App
          </a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
