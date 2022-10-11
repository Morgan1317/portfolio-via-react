import React from 'react'; 

import Nav from '../Navigation/index';

function Header() {
    return (
        <section className="initial">
             <div className="name">
            <h1 >
                <a className=' linkbtn text-center'href="#top">Morgan Holcomb</a>
            </h1>
            </div>
            <div className='navigation'>
                <Nav></Nav>
            </div>
        
        </section>
        
    )
}

export default Header; 