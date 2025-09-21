// import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Skills = () => {
    return(
        <div className='Container-sm|md|lg|xl bg-dark text-white text-center mt-3 p-3 rounded bg-light text-dark'>
            <h2>Skills</h2>
            <div>
                <p>
                    I am skillful fullstack developer with solid understanding on various areas as indicated below;
                </p>
                <div className='container-sm|md|lg|xl text-start mx-auto' style={{maxWidth:'500px'}}>
                    <ul className='list-group'>
                        <li className='list-item'><span className='fw-bold'>Frontend Development: </span>HTML, CSS, JavaScript, Typescript, React.js, Angular, and vue.</li>
                        <li className='list-item'><span className='fw-bold'>Web Development: </span>Node.js, Express.js, REST APIs, Git</li>
                        <li className='list-item'><span className='fw-bold'>UI/UX Optimization:</span>User Interface Design, Cross-Browser Compatibility, Performance Optimization</li>
                        <li className='list-item'><span className='fw-bold'>Software Development:</span>Agile Methodologies, Version Control (Git), Testing and Debugging</li>
                        <li className='list-item'><span className='fw-bold'>	Backend Development:</span>Basic knowledge of MongoDB, Express.js, Python Django, php laravel, Mysql, and Springboot.</li>
                        <li className='list-item'><span className='fw-bold'>Tools & Technologies: </span>GitHub, SPSS, STATA, Project Management</li>
                    </ul>
                </div>    
            </div>
            <div></div>
        </div>
    );
}

export default Skills;