import React from 'react';
import myProfile from '../statics/official blue.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <div className='container-sm|md|lg|xl bg-dark text-white text-center mt-3 p-3 rounded'>
            <h2> Hello I am Moses Macharai</h2>
            <h3>Junior Fullstack Developer</h3>
    
            <img src={myProfile} alt="my profile photo" className="rounded-circle img-fluid" style={{ width:"150px", height:"150px" }}/>
            <p>Welcome to my portfolio website. I am a passionate full stack developer with expertise in React.js, Spring Boot, and SQL. I love creating dynamic and responsive web applications that provide seamless user experiences. Explore my work and skills, and feel free to reach out for collaboration or opportunities!</p>
            <a href="#about" className='btn btn-primary m-2'>About Me</a>
            <a href="#skills" className='btn btn-primary m-2'>Skills</a>            
        </div>
    );
}

export default Home;