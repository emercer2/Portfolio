import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Projects.module.css';
import '../../index.css';
import projectsInfo from '../../data/projectList.json'; 

function Projects(){

  const navigate = useNavigate();

  return (
    <div>
      <div className="backButtonRow">
        <FaArrowLeft onClick={()=>navigate("/Portfolio/")}/>
      </div>
      <div className='App'>
        <h1>Projects</h1>
        <div className={styles.cardList}>
        {
          projectsInfo.map(function(projectInfo, index){
            return <div className={styles.card}>
                      {/* <img className="cardImg" src={projectInfo.photo}></img> */}
                      <div className="cardText">
                        <h2>{projectInfo.title}</h2>
                        <p>{projectInfo.desc}</p>
                      </div>
                      <button onClick={()=>navigate(projectInfo.link)} className='basicButton'>Visit Site</button>
              </div>;
          })          
        }
      </div>
      </div>
    </div>
  );
}
  
export default Projects;
  