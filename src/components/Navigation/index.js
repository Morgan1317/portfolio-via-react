import React from 'react';

function Nav(props) {
    
    return (
        <div>
       
        <nav className='navigation'>
            <ul className='row'>
                <li className='col-md-3'>
                    <a className='link' href="#about-me">About Me</a>
                </li>
                <li className='col-md-3'>
                    <a className='link' href="#work">Portfolio</a>
                </li> 
                <li className='col-md-3'>
                    <a className='link' href="#contact-me">Contact Me</a>
                </li>
                <li className='col-md-3'>
                    <a className='link' href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
        </div>
        
    )
}

export default Nav; 