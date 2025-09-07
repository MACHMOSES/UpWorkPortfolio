import myProfile from '../statics/IMG_20231023_130632.jpg';
import './Home.css';

const Home = () => {
    return(
        <div>
            <h2> Hello I am Moses Macharai</h2>
            <h3>Junior Fullstack Developer</h3>
    
            <img src={myProfile} alt="my profile photo" className='myprofile'/>
            
            
            <div className='favicon'>
                //favicon
            </div>
        </div>
    );
}

export default Home;