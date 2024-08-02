import work1 from "./work1.PNG"
import work2 from "./work2.PNG"
import work3 from "./work3.PNG"

function WorkShopSection(){
    return(
        <div className="workShopPart">
            <h2>THIS IS WORKSHOP SECTION</h2>
            <p>This is the description for workshop sections.</p>

            <div className="workShopImagePart">
                <div className="workshopPart1">
                <img src={work1} alt="pic" />
                <p>How to make more money</p>
                <p>Jun 11th, 2024 at 10:00 AM (IST)</p>
                <button className="viewButton">View Details</button>
                </div>

                <div className="workshopPart1">
                <img src={work2} alt="pic" />
                <p>How to fight crime</p>
                <p>Jun 1st, 2034 at 10:00 AM (IST)</p>
                <button className="viewButton">View Details</button>
                </div>

                <div className="workshopPart1">
                <img src={work3} alt="pic" />
                <p>This is a workshop connected to a ticket</p>
                <p>Jun 1st, 2034 at 10:00 AM (IST)</p>
                <button className="viewButton">View Details</button>
                </div>

            </div>
        </div>
    );
}

export default WorkShopSection;