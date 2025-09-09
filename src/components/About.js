import './About.css'

const About = () => {
    return (
        <div>
            <h1>About me</h1>
            <div>
                <p> 
                    Passionate full stack Developer with solid knowledge in creating responsive and dynamic web applications. Proficient in React.js, springboot, SQL and other modern web development frameworks, with a strong background in software development and UI/UX optimization. Adept at collaborating with cross-functional teams to deliver seamless user experiences. Eager to contribute to innovative solutions at your company.
                </p>
            </div>
            <div>
                <h2 className='educationHeader'>Education</h2>
                <h4 className='school'>Laikipia University</h4>
                <p>Bachelor of Science in Community Development | September 2016 upto August 2021</p>
                <h4 className='certification'>Relevant Certifications</h4>
                <ul>
                    <li className='nocertificates'>MERN Web Development</li>
                    <li className='nocertificates'>Project Management</li>
                    <li className='nocertificates'>Monitoring and Evaluation</li>
                    <li className='nocertificates'>Data Analysis (SPSS & STATA)</li>
                    <li className='nocertificates'>Entrepreneurship</li>
                </ul>
            </div>
            
        </div>
    );
}

export default About;