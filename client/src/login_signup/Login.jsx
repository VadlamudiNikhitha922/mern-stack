import React from 'react'
import {Link} from 'react-router-dom'
import style from "./Login.module.css"


    
function Login() {
  return (
    <div>
      <div>
      <div className={style.formContainer}>
    
        <h1>LOGIN PAGE</h1>
    <p>
    <input type="user name" name="user name" placeholder="enter the name"/>
    </p>
    <p>
    <input type="email id" name="email id"placeholder="enter your email id"/>
    </p>
    <p>
    <input type="password"placeholder="enter your password"/>
    </p>
   
    <button>SUBMIT</button>
    <div>
      <p>Dont have account <Link to="/Signup">Signup</Link> </p>
      </div>   
    </div>
    </div>
    </div>
   
    
    
    
  );
};

export default Login;


