import React, { useState } from 'react';
import './SignUp.css'
import { Link } from "react-router-dom";
import logo from './logoBB.PNG';


export default function AboutUs() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if ( email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo} 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' placeholder='Enter your Email id' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'  className='login__signInButton'>Sign In</button>
                </form>
              <button onClick={handleRegister} type='submit' className='login__registerButton'>Register</button>
            </div>
        </div>
    )
};