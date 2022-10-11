import React from 'react';

function Footer() {
    
    return (
        <section id="contact-me" className="info">
            <div className="flex-row">
                <h2>
                    Contact Me
                </h2>
                <div className="body">
                    <address>
                        <ul>
                            <li>
                                <a href="mailto:morganholcomb2019@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                            </li> 
                            <li>
                                <a href="https://github.com/Morgan1317/portfolio" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li>
                                <a href="./assets/Resume for Morgan Holcomb Placeholder.pdf" id="resume" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                         
                        </ul>
                    </address>
                </div>
            </div>
        </section>

    )
}

export default Footer; 