import './userlogin.css';
import { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState(true)
  
  return (
    <div className="wrapper">
        <div className="title-text">
        {  login ?  
        <div className="title login">Login Form</div> :
        <div className="title signup">Signup Form</div>
        }
        </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login"/>
          <input type="radio" name="slide" id="signup"/>
          <label for="login" className="slide login"
           onClick={(() => {setLogin(true)})} >
           Login</label>
          <label for="signup" className="slide signup"
          onClick={(() => {setLogin(false)})} 
          >Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          { login ? 
          <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Email Address" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass-link"><a href="/">Forgot password?</a></div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member? 
          <a  href="/" >Signup now</a>
          </div>    
        </form>  :
           <form action="#" className="signup">
           <div className="field">
             <input type="text" placeholder="Email Address" required />
           </div>
           <div className="field">
             <input type="password" placeholder="Password" required />
           </div>
           <div className="field">
             <input type="password" placeholder="Confirm password" required />
           </div>
           <div className="field btn">
             <div className="btn-layer"></div>
             <input type="submit" value="Signup" />
           </div>
           <div className="signup-link">Already a member? 
          <a  href="/" >Login now</a>
          </div>
         </form>
        }
        </div>
      </div>
    </div>

  )
}
