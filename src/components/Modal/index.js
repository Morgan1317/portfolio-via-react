import React from 'react';


const Modal = ({ onClose, currentProject }) => {
  const { title, languages, github, deploy, i } = currentProject;

  return (
    <div >
      <div className='row'>
        <h3 className=" col-12 text-center">{title} </h3>
        <img
        src={require(`../../assets/images/${i}.jpg`)}
          alt={title}
          className='center modal'
        />
              <p className=' col-4 text-center'>Languages Used:{languages}</p>
              <a
            href={github}
            target="_blank"
          rel="noreferrer noopener"
          className='col-4'
          >Github </a>
            
         
          <a
            href={deploy}
            target="_blank"
          rel="noreferrer noopener"
          className='col-4'
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
