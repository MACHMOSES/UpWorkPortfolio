import { Link, Links} from 'react-router-dom';
import myProfile from '../statics/official blue.jpg';
import './Home.css';
import linkedin from '../statics/10462330.png';
import twitter from '../statics/sl_z_072523_61700_05.jpg';
import instagram from '../statics/10462345.png';

const Home = () => {
    return(
        <div>
            <h2> Hello I am Moses Macharai</h2>
            <h3>Junior Fullstack Developer</h3>
    
            <img src={myProfile} alt="my profile photo" className="myprofile"/>
            <div>
                <button className="button"><Link to="/contact" className='buttonLink'>Contact</Link></button>
            </div>
            
            <div className='favicon'>
                <a href='https://www.linkedin.com/in/wangui-macharia-4466302b7/'>
                     <img src={linkedin} alt="image of instagram Favicon"/>
                </a> 
                <a href=''>
                    <img src={twitter} alt='image of a linkedin favicon'/> 
                </a>
                <a href='https://github.com/MACHMOSES'>
                    <img src={instagram} alt='image of a '/>
                </a> 
            </div>
        </div>
    );
}

export default Home;