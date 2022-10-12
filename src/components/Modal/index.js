import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { title, languages, github, deploy } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title} </h3>
        <img
          //src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{languages}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
