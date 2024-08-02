import bruce from "./bruce.PNG";
import dark from "./dark.PNG";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faXTwitter, faGoogle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle , faFacebook, faXTwitter} from '@fortawesome/free-brands-svg-icons';


function SpeakerSection(){
    return(
        <div className="speakerPart">
            <h2>THIS IS SPEAKERS SECTION</h2>
            <p>This is the description for speakers section.</p>

            <div className="speakerImagePart">
                <div className="brucePart">
                    <img src={bruce} alt="pic" />
                     <p className="bruce"><strong>Bruce Wayne</strong></p> 
                    <p className="">Chairman</p>
                    <p>Wayne Enterprises</p>
                    <p><FontAwesomeIcon icon={faGoogle} className="iconPart1" /> 
                    <FontAwesomeIcon icon={faFacebook} className="iconPart1" /> 
                    <FontAwesomeIcon icon={faXTwitter} /></p>
                </div>


                <div className="darkPart">
                    <img src={dark} alt="pic" />
                    <p className="dark"><strong>Dark Knight</strong></p>
                    <p>Batman</p>
                    <p>Gotham</p>
                    <p><FontAwesomeIcon icon={faGoogle}  className="iconPart1"/> 
                    <FontAwesomeIcon icon={faFacebook}  className="iconPart1"/> 
                    <FontAwesomeIcon icon={faXTwitter} /></p>
                </div>
            </div>
        </div>
    );
}
export default SpeakerSection;