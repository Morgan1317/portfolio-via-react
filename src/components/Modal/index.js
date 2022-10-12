import React from 'react';


const Modal = ({ onClose, currentProject }) => {
  const { title, languages, github, deploy, i } = currentProject;

  return (
    <div >
      <div >
        <h3 className=" text-center">{title} </h3>
        <img
        src={require(`../../assets/images/${i}.jpg`).default}
          alt={title}
          className='center'
        />
              <p className='text-center'>{languages}</p>
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
        <button className='btn' type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
