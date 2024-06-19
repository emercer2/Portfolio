import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Contact.module.css';
import '../../index.css';
import emailjs from 'emailjs-com';

function Contact(){
  const serviceId = "service_ezgn4hi";
  const templateId = "template_yvd6vbg";
  const userId = "8YeGKUFILj1a1VVqi";


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      email: email,
      subject: subject,
      message: message
    };
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
          alert(`Your message has been sent`)
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <div className={styles.backButtonRow}>
        <FaArrowLeft onClick={()=>navigate("/Portfolio/")}/>
      </div>
      <div className='App'>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
          </label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <label>
            Subject:
          </label>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br/>
          <label>
            Message:
          </label>
          <br/>
          <textarea 
            className={styles.textarea} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6">
          </textarea>
          <br/>
          <input className='basicButton' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
  
export default Contact;
  