import styles from './Recipies.module.css'; 
//import '../../index.css';
import { useNavigate } from 'react-router-dom';

function Recipies(){
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Recipie Catalog</h1>
    </div>
  );
}

export default Recipies;