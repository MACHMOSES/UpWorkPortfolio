import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className='Container-sm|md|lg|xl bg-dark text-white text-center mt-3 p-3 rounded bg-light text-dark'>
            <h1>About me</h1>
            <div>
                <p> 
                    Passionate full stack Developer with solid knowledge in creating responsive and dynamic web applications. Proficient in React.js, springboot, SQL and other modern web development frameworks, with a strong background in software development and UI/UX optimization. Adept at collaborating with cross-functional teams to deliver seamless user experiences. Eager to contribute to innovative solutions at your company.
                </p>
            </div>
            <div>
                <h2>Education</h2>
                <h4>Laikipia University</h4>
                <p>Bachelor of Science in Community Development | September 2016 upto August 2021</p>
                <h4>Relevant Certifications</h4>
                <ul className='list-group list-dotted text-start mx-auto' style={{maxWidth:'200px'}}>
                    <li className='list-item'>MERN Web Development</li>
                    <li className='list-item'>Project Management</li>
                    <li className='list-item'>Monitoring and Evaluation</li>
                    <li className='list-item'>Data Analysis (SPSS & STATA)</li>
                    <li className='list-item'>Entrepreneurship</li>
                </ul>
            </div>
            
        </div>
    );
}

export default About;