import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faGoogle , faFacebook, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import bruce from "./bruce.PNG";

import { Link as RouterLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function SecondFlexPart(){

    const calculateTimeLeft = () => {
        const eventDate = new Date('2034-07-31T06:00:00'); 
        const difference = +new Date(eventDate) - +new Date();
        
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            D: Math.floor(difference / (1000 * 60 * 60 * 24)),
            H: Math.floor((difference / (1000 * 60 * 60)) % 24),
            M: Math.floor((difference / 1000 / 60) % 60),
            S: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span key={interval}>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
    
    return(
      <div>
            <div className='secondFlexPart'>
                <h1>KonfHub Frontend Evaluation Task</h1>
                      <div className='cameraIcon'>
                          <div><p><FontAwesomeIcon icon={faCamera} /> Online </p></div>
                          <div><p><FontAwesomeIcon icon={faTicket} /> Paid </p></div>
                      </div>
                      <p><strong>Event Live Link:</strong> 
                      <RouterLink to="/">Open streaming website</RouterLink></p>
                      <p><strong>Date:</strong> Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>

                      <div>
                          <h3>EVENTS STARTS IN</h3>
                          <strong><h4>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h4> </strong>
                      </div>
            
           
        
            </div>
                    <div>
                          <button className='buynowButton'>
                              <RouterLink to="/RegisterPage" className='registerLink'>BuyNow</RouterLink></button><br/><br/>
                              <a href='https://dev.konfhub.com/konfhub-frontend-evaluation-task/'>
                              <button className='officialButton'>Official website</button>
                                </a>
                    </div>

                    <div>
                      <h2>HOSTED BY</h2>
                      <div className='hostMain'>
                      <div className='hostPart'>
                          <div className='hostImage'>
                          <img src={bruce} alt="pic" />
                          </div>
                          <div><h3>Manjunath R</h3></div>
                          
                          
                      </div>
                      <div>
                          <p>This is the description of the<br/>
                             organiser. You can get to know<br/>
                              more about the organiser here.</p>
                          </div>
                      <h3>Contact Us On</h3>
                      <div className='hostIcons'>
                        <div><a href='https://facebook.com/konfhub'><FontAwesomeIcon icon={ faFacebook } /></a></div>
                        <div><a href='https://linkedin.com/konfhub'><FontAwesomeIcon icon={faGoogle } /></a></div>
                        <div> <a href='https://twitter.com/konfhub'><FontAwesomeIcon icon={faXTwitter } /></a></div>
                      </div>
                    </div>
                      </div>
                      
            
      </div>
    );
}
export default SecondFlexPart;