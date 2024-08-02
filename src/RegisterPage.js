import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot ,faIndianRupeeSign, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';



function RegisterPage(){

    const[count1, setcount1]= useState(0);
    const[count2, setcount2]= useState(0);
    const[count3, setcount3]= useState(0);
    const[count4, setcount4]= useState(0);
    const ticketFreePrice = 0;


    const totalFreePrice = count1 * ticketFreePrice;
    const ticketPrice = 1000;
    const paidTicket1 = (count2 * ticketPrice);
    const paidTicket2 = (count3 * ticketPrice);
    const paidTicket3 = (count4 * ticketPrice);
    const totalFare = (ticketFreePrice + paidTicket1 + paidTicket2 + paidTicket3);

    return(
        <div className='registerTopPart'>
            <div>
                <h1 className='registerTop'>
                <RouterLink to="/"><FontAwesomeIcon icon={faArrowLeft} className='leftArrow'/></RouterLink>  
                    KonfHub Frontend Evaluation Task
                    </h1>
                <p className='calenderPart'> 
                <FontAwesomeIcon icon={faCalendarDays} className='calenderIcon' />
                31st Jul, 2034 at 6:00 AM IST to 31st Aug, 2034 at 6:00 PM IST
                </p>

                <div className='registerTicketPage'>
                    <input type='text' placeholder='Search for tickets..' className='ticketSearch'/>
                    <button className='ticketSearchButton'>search</button>
                    <div className='freeTicketPart11'>
                <h3>Free Ticket</h3>
                 <p>This is a ticket description. This is a free ticket. This ticket is uncategorised.</p>
                 <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                    <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                 <p>This is additional venue details.</p>
                 <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                 <p className='pFree'>FREE<button className='registerButton1'>
                 <p><button onClick={()=> setcount1(count1 -1)} className='minusButton'>-</button>
                 {count1}
                 <button onClick={()=> setcount1(count1 +1)} className='plusButton'>+</button></p>
                 
                </button></p>
                 
                 </div>

                 


            <div className='freeTicketPart21'>
                <h3>Paid Ticket</h3>
                <p>This is a ticket description. This is a paid ticket. This ticket is uncategorised.</p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                    <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'><FontAwesomeIcon icon={faIndianRupeeSign} />1000 
                <button className='registerButton1'>
                <p><button onClick={()=> setcount2(count2 -1)} className='minusButton'>-</button>
                 {count2}
                 <button onClick={()=> setcount2(count2 +1)} className='plusButton'>+</button></p>
                 
                    </button></p>
            </div>



            <div className='freeTicketPart31'>
            <h3>Donation Ticket</h3>
                <p>This is a ticket description. This is a donation ticket. This ticket is uncategorised.</p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'>Min <FontAwesomeIcon icon={faIndianRupeeSign} /> 10 - Max <FontAwesomeIcon icon={faIndianRupeeSign} /> 1000 
                 <button className='donationregisterButton1'>
                 <p><button onClick={()=> setcount3(count3 -1)} className='minusButton'>-</button>
                 {count3}
                 <button onClick={()=> setcount3(count3 +1)} className='plusButton'>+</button></p>
                    </button></p>
               
            </div>

            <div className='freeTicketPart41'>
            <h3>Ticket With Coupon</h3>
                <p>This is a ticket description. This is a paid ticket. This ticket is uncategorised. This<br/>
                ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.
                </p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'><FontAwesomeIcon icon={faIndianRupeeSign} />1000
                <button className='registerButton1'>
                <p><button onClick={()=> setcount4(count4 -1)} className='minusButton'>-</button>
                 {count4}
                 <button onClick={()=> setcount4(count4 +1)} className='plusButton'>+</button></p>
                    </button></p>
                
            </div>
            </div>
            </div>

            <div className='ticketSummery'>
                <h1>Ticket Summery</h1>
                <p><strong>Free Ticket :</strong> {count1} * {ticketFreePrice} = {totalFreePrice }</p>
                <p><strong>Paid Ticket :</strong> {count2} * {ticketPrice} = {paidTicket1} </p>
                <p><strong>Donation Ticket :</strong> {count3} * {ticketPrice} = {paidTicket2} </p>
                <p><strong>Ticket With Coupon :</strong> {count4} * {ticketPrice} = {paidTicket3} </p>
                <h3>Total : {totalFare}</h3>
                <button className='proceedButton'>Proceed</button>
            </div>

        </div>


        
            
            
    );
}

export default RegisterPage;