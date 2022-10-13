import React from 'react';
import Pdf from '../../assets/Morgan_Holcomb_Resume.pdf'

function Resume() {
    return (
        <div>
            <p>I am becoming proficient in Javascript, HTML, CSS, Handlebars, React, Express, Node, and MongoBd. I am continuing to expand my knowledge everyday.</p>
            <a href={Pdf}>Click here for my resume</a>
        </div>
    )
}

export default Resume
