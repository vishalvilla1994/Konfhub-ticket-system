import konfhub11 from  "./konfhub11.PNG";
import konfhub22 from  "./konfhub22.PNG";


function About(){
    return(
        <div className="AboutPart">
            <h2> ABOUT EVENT</h2>
            <p className="AboutPara">This is the description of an event. This event was created as an evaluation task for the role of <strong>Frontend<br/>
               Engineer.</strong> <em>Are you the one we are looking for?</em> Don't get nervous. Take help if you need. Ask us more questions<br/>
               if you did not understand the problem. You can reach-us out at reachus@konfhub.com..
            </p>
            <img src={konfhub11} alt="image" className="aboutImage1" /><br/>
            <img src={konfhub22} alt="image" className="aboutImage2" />

            <div className="gridContainer">
            <div class="item"><p>A</p> </div>
            <div class="item"><p>B</p> </div>
            <div class="item"><p>C</p> </div>
            <div class="item"><p>A1</p> </div>
            <div class="item"><p>B1</p> </div>
            <div class="item"><p>C1</p> </div>
            <div class="item"><p>A2</p> </div>
            <div class="item"><p>B2</p> </div>
            <div class="item"><p>C2</p> </div>
            </div>
        </div>
    );
}
export default About;