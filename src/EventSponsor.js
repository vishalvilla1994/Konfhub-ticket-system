import eventspon from "./eventspon.PNG";
import eventcate from "./eventcate.PNG";

function EventSponsor(){
    return(
        <div className="eventSponsor">
            <h2>THIS IS EVENT SPONSORS</h2>
            <p>This is description of sponsors section.</p>
            <img src={eventspon} alt="pic" />
            <p>SPONSOR CATEGORY</p>
            <img src={eventcate} alt="pic" />

        </div>
    );
}

export default EventSponsor;