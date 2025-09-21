
import 'bootstrap/dist/css/bootstrap.min.css';
const Works = () => {
    return (
        <div className='container-sm|md|lg|xl bg-dark text-white text-center mt-3 p-3 rounded'>
            <h2>Projects</h2>
            <p>
                Below are some of the projects I have done in GitHub
            </p>
            <div className='list-group mx-auto' style={{maxWidth:'600px'}}>
                <div className='lit-item text-start' >
                    <div>
                        <a href='https://github.com/MACHMOSES/SpringBootReact' className='fw-bold'>Springboot and react project</a> <span>
                        :Developed a full-stack project using springboot and react featuring user registration
                    </span>
                    </div>
                    <div>
                        <a href='https://github.com/kmuchina/PenstrokeClone' className='fw-bold'>Penstroke Clone</a> <span>
                        :Created a responsive web application clone using JavaScript, focusing on clean UI design and user experience optimization.
                    </span>
                    </div>
                    
                    <div>
                        <a href='https://github.com/MACHMOSES/odoo-clone' className='fw-bold'>Odoo Clone</a> <span>
                        :Simulated an ERP system using react, demonstrating capabilities to create user interactive UI.
                    </span>
                    </div>
                    <div>
                        <a href='https://github.com/MACHMOSES/EverydayHealthClone' className='fw-bold'>Everyday Health Clone</a> <span>
                        :Built a health tracking application with React.js, focusing on dynamic content updates and data visualization.
                    </span>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Works;