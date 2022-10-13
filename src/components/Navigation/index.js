import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    
    return (
        <div>
       
        <nav className='navigation'>
            <ul className='row text-center'>
                <li className='col-md-3'>
                        <a
                            className={currentPage === 'Home' ? 'link active' : 'link'} href="#about-me" onClick={() => handlePageChange('About')}>About Me</a>
                </li>
                <li className='col-md-3'>
                    <a className={currentPage === 'Home' ? 'link active' : 'link'} href="#work" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                </li> 
                <li className='col-md-3'>
                    <a className={currentPage === 'Home' ? 'link active' : 'link'} href="#contact-me" onClick={() => handlePageChange('Contact')}>Contact Me</a>
                </li>
                <li className='col-md-3'>
                    <a className={currentPage === 'Home' ? 'link active' : 'link'} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                </li>
            </ul>
        </nav>
        </div>
        
    )
}

export default Nav; 