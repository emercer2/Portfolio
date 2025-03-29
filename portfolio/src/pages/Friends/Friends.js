import styles from './Friends.module.css'; 
//import '../../index.css';
import { useNavigate } from 'react-router-dom';

function Friends(){
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Friend Wiki</h1>
    </div>
  );
}

export default Friends;