import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';


function NavBar(){
    return(
        <div>
                <div>
                <img src={"https://media.konfhub.com/konfhub-logo-purple.svg"} alt="Logo" />
                </div>
                <div>
                    <button className='navIconButton'>
                    <RouterLink to="/Login"><FontAwesomeIcon icon={faUser}/></RouterLink>
                    </button>
          
                </div>
            </div>
    );
}

export default NavBar;