import './Skills.css'
const Skills = () => {
    return(
        <div>
            <h2>Skills</h2>
            <div>
                <p>
                    I am skillful fullstack developer with solid understanding on various areas as indicated below;
                </p>
                <div className='skillList'>
                    <ul className='skillsUlList'>
                        <li className='liSkill'><span>Frontend Development: </span>HTML, CSS, JavaScript, Typescript, React.js, Angular, and vue.</li>
                        <li className='liSkill'><span>Web Development: </span>Node.js, Express.js, REST APIs, Git</li>
                        <li className='liSkill'><span>UI/UX Optimization:</span>User Interface Design, Cross-Browser Compatibility, Performance Optimization</li>
                        <li className='liSkill'><span>Software Development:</span>Agile Methodologies, Version Control (Git), Testing and Debugging</li>
                        <li className='liSkill'><span>	Backend Development:</span>Basic knowledge of MongoDB, Express.js, Python Django, php laravel, Mysql, and Springboot.</li>
                        <li className='liSkill'><span>Tools & Technologies: </span>GitHub, SPSS, STATA, Project Management</li>
                    </ul>
                </div>    
            </div>
            <div></div>
        </div>
    );
}

export default Skills;