import headshot from '../media/headshot.png';
import headshotOutline1 from '../media/headshotOutline1.png';
import headshotOutline2 from '../media/headshotOutline2.png';
import styles from './Home.module.css'; 
//import '../../index.css';
import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Elizabeth Mercer's Portfolio</h1>
      <div className={styles.row}>
        <img src={headshot} className={styles.headshot} />
        <img src={headshotOutline1} className={styles.headshotOutline1} />
        <img src={headshotOutline2} className={styles.headshotOutline2} />
        <p className={styles.introText}>
          Welcome to my first portfolio ever!
          Also my first time using react. That is some pretty exciting stuff right there. Soon I will have different projects here to show off the cool things I am capable of.
        </p>
      </div>
      <div>
        <button onClick={()=>navigate("/Contact")} className='basicButton'>Contact Me</button>
        <button disabled className='basicButton'>Portfolio Projects</button>
      </div>
    </div>
  );
}

export default Home;