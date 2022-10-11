import React from 'react'; 
import myImage from '../../assets/images/morgan.JPG';

function About() {
    return (
        <section>
            <div className=" about row">
                <img className=' float-md-start col-4' src={myImage} alt="Morgan Holcomb" />
                <div className="subtitle col row align-items-end">
                <h2 className='justify-content-end text-center'>Full Stack Web Developer</h2>
                </div>

            </div>
            <p className='aboutMe'>This is my about me page, what do you want to know</p>
        
        </section>
   ) 
}
export default About; 