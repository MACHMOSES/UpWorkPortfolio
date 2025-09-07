import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
            <nav className="navbar">
                <h3>machmoses</h3>
                <div className='navlink'>
                    <Link to="/" className='routelink'>Home</Link>{" "}
                    <Link to="/about" className='routelink'>About</Link>{" "}
                    <Link to="/skills" className='routelink'> Skill</Link>{" "}
                    <Link to="/Work" className='routelink'>Work</Link>{" "}
                    <Link to="/contact" className='routelink'>Contact</Link>
                </div>

            </nav>
    );
}

export default Navbar;