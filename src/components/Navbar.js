
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Skills';

const Navbar = () => {
    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [work, setWork] = useState(false);
    const [contact, setContact] = useState(false);
    return (
    <>    

        <nav className='navbar navbar-expand-sm bg-light fixed-top'>
            <div className='container-fluid'>
                <h3 className='navbar-text' style={{fontFamily:'cursive'}}>machmoses</h3>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar' aria-controls='collapsibleNavbar' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='collapsibleNavbar'>
                    <ul className='navbar-nav ms-auto flex-column flex-sm-row'>
                            <li className='nav-item'><a href='#home' className='nav-link active'style={{
                            backgroundColor:home ? 'blue' : 'white',
                            color:'gray',
                            textDecoration:'none',
                            padding:'5px',
                            borderRadius:'5px'
                        }} onMouseEnter={() => setHome(true)   
                        }
                        onMouseLeave={()=> setHome(false)} >home</a></li>
                            <li className='nav-item'><a href='#about' className='nav-link'style={{
                            backgroundColor:about ? 'blue' : 'white',
                            color:'gray',
                            textDecoration:'none',
                            padding:'5px',
                            borderRadius:'5px'
                        }} onMouseEnter={() => setAbout(true)   
                        }
                        onMouseLeave={()=> setAbout(false)}>about</a></li>
                            <li className='nav-item'><a href='#skills' className='nav-link'style={{
                            backgroundColor:skills ? 'blue' : 'white',
                            color:'gray',
                            textDecoration:'none',
                            padding:'5px',
                            borderRadius:'5px'
                        }} onMouseEnter={() => setSkills(true)   
                        }
                        onMouseLeave={()=> setSkills(false)}>skills</a></li>
                            <li className='nav-item'><a href='#work' className='nav-link' style={{
                            backgroundColor:work ? 'blue' : 'white',
                            color:'gray',
                            textDecoration:'none',
                            padding:'5px',
                            borderRadius:'5px'
                        }} onMouseEnter={() => setWork(true)   
                        }
                        onMouseLeave={()=> setWork(false)}>work</a></li>
                            <li className='nav-item'><a href='#contact' className='nav-link bt bt-bg-primary' style={{
                            backgroundColor:contact ? 'blue' : 'white',
                            color:'gray',
                            textDecoration:'none',
                            padding:'5px',
                            borderRadius:'5px'
                        }} onMouseEnter={() => setContact(true)   
                        }
                        onMouseLeave={()=> setContact(false)}>contact</a></li>
                     </ul>
                </div>
                
            </div>
        </nav>
    </>
    );
}

export default Navbar;