import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { title, languages, github, deploy, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title} </h3>
        <img
        src={require(`../../assets/images/${index}.jpg`).default}
          alt="current category"
        />
              <p>{languages}</p>
              <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            
          </a>
          <a
            href={deploy}
            target="_blank"
            rel="noreferrer noopener"
          >
            
          </a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
