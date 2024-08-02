
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';

function Tickets() {
    return (
        <div className='ticketPart'>
            <h2 className='ticketHead'>TICKETS</h2>
            <div className='freeTicketPart1'>
                <h3>Free Ticket</h3>
                <p>This is a ticket description. This is a free ticket. This ticket is uncategorised.</p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                    <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                 <p className='pFree'>FREE<button className='registerButton'>
                 <RouterLink to="/RegisterPage" className='registerLink'>Register</RouterLink></button></p>
                
            </div>

            <div className='freeTicketPart2'>
                <h3>Paid Ticket</h3>
                <p>This is a ticket description. This is a paid ticket. This ticket is uncategorised.</p>
                 <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                    <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'><FontAwesomeIcon icon={faIndianRupeeSign} />1000 
                <button className='registerButton'>
                 <RouterLink to="/RegisterPage" className='registerLink'>Register</RouterLink></button></p>
            </div>

            <div className='freeTicketPart3'>
            <h3>Donation Ticket</h3>
                <p>This is a ticket description. This is a donation ticket. This ticket is uncategorised.</p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'>Min <FontAwesomeIcon icon={faIndianRupeeSign} /> 10 - Max <FontAwesomeIcon icon={faIndianRupeeSign} /> 1000  
                <button className='donationregisterButton'><RouterLink to="/RegisterPage" className='registerLink'>Register</RouterLink></button></p>
               
            </div>

            <div className='freeTicketPart4'>
            <h3>Ticket With Coupon</h3>
                <p>This is a ticket description. This is a paid ticket. This ticket is uncategorised. This<br/>
                ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.
                </p>
                <a href='https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu'>
                <p className='locationPart'><FontAwesomeIcon icon={faLocationDot} /> KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka,<br/> India</p></a>
                <p>This is additional venue details.</p>
                <p>Available Till: 31st Aug 2034, 06:00 PM IST</p>
                <p className='pFree'><FontAwesomeIcon icon={faIndianRupeeSign} />1000 
                <button className='registerButton'><RouterLink to="/RegisterPage" className='registerLink'>Register</RouterLink></button></p>
                
            </div>
                    
            
        </div>
    );
}

export default Tickets;
