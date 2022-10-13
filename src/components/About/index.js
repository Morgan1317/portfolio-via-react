import React from 'react'; 
import myImage from '../../assets/images/morgan.JPG';

function About() {
    return (
        <section>
            <div className=" about row">
                <img className=' float-md-start col-3' src={myImage} alt="Morgan Holcomb" />
                <div className="subtitle col row align-items-end">
                <h2 className='justify-content-end text-center'>Full Stack Web Developer</h2>
                </div>

            </div>
            <p className='aboutMe'>I  earned my bachelor’s degree in Biomedical Engineering from Texas A&M University in August 2019.
            </p>
            <p className='aboutMe'>I accepted the invitation to work under the guidance and leadership of Dr. Sonia Villapol at Houston Methodist in February 2021, and am  currently involved in a neurorestorative project that fuels her desire to gain experience in research </p>
            <p className='aboutMe'>With my background, although coding wasn’t a major part of my degree, I was able to get experience, and it has fueled me to continue learning, so that I can be a full stack developer. 
            </p>
            <p className='aboutMe'> Though a native of East Texas, I have  enjoyed travelling internationally and experienced living in Saudi Arabia for two years. My desire is to have a positive, global impact in my work always. </p>
        </section>
   ) 
}
export default About; 