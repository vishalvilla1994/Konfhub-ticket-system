import Navigation from './Navigation';
import About from './About';
import Tickets from './Tickets';
import SpeakerSection from './SpeakerSection';
import WorkShopSection from './WorkShopSection';
import EventSponsor from './EventSponsor';
import SecondFlexPart from './SecondFlexPart';
import NavBar from './NavBar';

function Header(){
    return(
        <div>
            <NavBar />
                 <div className='mainFlex'>
            
            <div>
            <Navigation />
            <About />
            <Tickets />
            <SpeakerSection />
            <WorkShopSection />
            <EventSponsor />
            </div>
            <div>
                <SecondFlexPart/>
            </div>
            
        </div>
        </div>
       
    );
}
export default Header;