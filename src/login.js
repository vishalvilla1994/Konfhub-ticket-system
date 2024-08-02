import { Link as RouterLink } from 'react-router-dom';

function Login(){
    return(
        <div className='loginMain'>
            
            <div className="loginPart">
                <h1>Sign In</h1>
                <p className="email">Email</p>
                <input className="emailLoginInput" type="text" placeholder="Enter your Email" /><br/>
                <p className="password">Password</p>
                <input className="passwordLogin" type="password" placeholder="Enter your Password" />
                <p>Forgot Password?</p><br/>
                <button className="signinButton">Sign In</button>
                <h3>or</h3>
                <button className="requestButton">Request OTP</button>
                <h3>or</h3>
                <p>Dont have account? <RouterLink to="/SignUp" className='signIn'> Sign Up</RouterLink></p>
            </div>
        </div>
    );
}

export default Login;