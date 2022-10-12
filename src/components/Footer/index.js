import React from 'react';

function Footer() {
    
    return (
        <section id="contact-me" className="info">
      
                <div className="body">
                    <address>
                        <ul className='row'>
                            <li className='col-3'>
                                <a href="mailto:morganholcomb2019@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                            </li> 
                            <li className='col-3'>
                                <a href="https://github.com/Morgan1317/portfolio" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className='col-3'>
                                <a href="https://www.linkedin.com/in/morgan-holcomb-8459277b/" id="linked-in" target="_blank" rel="noopener noreferrer">Linked-In</a>
                            </li>
                            <li className='col-3'>
                                <a href="./assets/Morgan_Holcomb_Resume.pdf" id="resume" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                         
                        </ul>
                    </address>
                </div>
        </section>

    )
}

export default Footer; 