import { Link as RouterLink } from 'react-router-dom';

function SignUp(){
    return(
        <div>
            <div className="signupPart"> 
                <h1>Sign Up</h1>
                <p className="signupEmail">Email</p>
                <input className="emailSignupInput" type="text" placeholder="Enter your Email" /><br/>
                <p className="signupPassword">Password</p>
                <input className="passwordSignup" type="password" placeholder="Enter your Password" />
                <p className="confirmPasswordSignup">Confirm Password</p>
                <input className="confirmPasswordSignup1" type="password" placeholder="Enter your Password" />
                <p className="sinupForgotPassword">Forgot Password?</p><br/>
                <button className="signupButton">Sign Up</button>
                <h3>or</h3>
                <button className="signupRequestotp">Request OTP</button>
                <h3>or</h3>
                <p>Already have account? <RouterLink to="/Login" className='signIn'>Sign In</RouterLink></p><br/>
                
                {/* <div>
                <p>By signing up, I accept the KonfHub Terms & Conditions and Code</p>
                <p>Of Conduct and have read the Privacy Policy. I agree to KonfHub</p>
                <p>to share my information with the event organizer and receive</p>
                <p>event related updates.</p>
                </div> */}
            </div>
            
        </div>
    );
}

export default SignUp;