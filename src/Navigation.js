
// import { Link } from "react-router-dom";
// import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

import React from "react";



function Navigation(){
    return(
        <div>
            

            <div className='navImage'>
                <img src={"https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"} alt="poster" className='bigImage' />
            </div>

            <div className="navList">
            
      
        <li>
          <ScrollLink to="AboutPart" smooth={true} duration={500}>About</ScrollLink>
        </li>
        <li>
          <ScrollLink to="ticketPart" smooth={true} duration={500}>Tickets</ScrollLink>
        </li>
        <li>
          <ScrollLink to="speakerPart" smooth={true} duration={500}>This is speakers section</ScrollLink>
        </li>
        <li>
          <ScrollLink to="workShopPart" smooth={true} duration={500}>This is workshop section</ScrollLink>
        </li>
        <li>
          <ScrollLink to="eventSponsor" smooth={true} duration={500}>This is event sponsors</ScrollLink>
        </li>
                {/* <li><Link to="/About">About</Link></li>
                <li><Link to="/Tickets ">Tickets</Link></li>
                <li><Link to="/SpeakerSection">This is speakers section</Link></li>
                <li><Link to="/WorkShopSection">This is workshop section</Link></li>
                <li><Link to="/EventSponsor">This is event sponsors</Link></li> */}
                {/* <li><RouterLink to="/Tickets ">Tickets</RouterLink></li> */}
                
                
            </div>

            

        </div>
    );
}

export default Navigation;
