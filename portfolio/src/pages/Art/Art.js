import styles from './Art.module.css'; 
//import '../../index.css';
import { useNavigate } from 'react-router-dom';

function Art(){
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Elizabeth Mercer's Art Portfolio</h1>
    </div>
  );
}

export default Art;