import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const addStyle = (routelink) => {
        const element = document.getElementsByClassName(routelink);
        if(element){
            element.style.color = 'aliceblue'
            element.style.fontWeight = 'bold'
            element.style.fontSize = '20px'
        }
    }
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