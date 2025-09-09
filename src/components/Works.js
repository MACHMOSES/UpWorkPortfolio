import './Work.css'
const Works = () => {
    return (
        <div>
            <h2 className="projects">Projects</h2>
            <p>
                Below are some of the projects I have done in GitHub
            </p>
            <div>

                <table>
                    <tr>
                        <td><a href='https://github.com/MACHMOSES/SpringBootReact'className='nameproject'>Springboot and react project</a></td>
                        <td>:Developed a full-stack project using springboot and react featuring user registration</td>
                    </tr>

                    <tr>
                        <td><a href='https://github.com/kmuchina/PenstrokeClone' className='nameproject'>Penstroke Clone</a></td>
                        <td>:Created a responsive web application clone using JavaScript, focusing on clean UI design and user experience optimization.</td>
                    </tr>

                    <tr>
                        <td><a href='https://github.com/MACHMOSES/odoo-clone' className='nameproject'>Odoo Clone</a></td>
                        <td>:Simulated an ERP system using react, demonstrating capabilities to create user interactive UI.</td>
                    </tr>

                    <tr>
                        <td><a href='https://github.com/MACHMOSES/EverydayHealthClone' className='nameproject'>Everyday Health Clone</a></td>
                        <td>:Built a health tracking application with React.js, focusing on dynamic content updates and data visualization.</td>
                    </tr>
                </table>
            </div>
        </div>    
    );
}

export default Works;