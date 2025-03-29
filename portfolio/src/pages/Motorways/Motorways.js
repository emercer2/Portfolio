import styles from './Motorways.module.css'; 
//import '../../index.css';
import { useNavigate } from 'react-router-dom';

function Motorways(){
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Mini Motorways Imitation</h1>
    </div>
  );
}

export default Motorways;