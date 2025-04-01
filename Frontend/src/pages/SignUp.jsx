import React, { useState, useEffect, useRef } from 'react';
import './SignUp.css';
import NavBar from './NavBar';

function SignUp() {
    return(
        <>
            <NavBar />
            <div className='Sign-up-page'>
                <h1 className='Sign-up-title'>Please Sign Up:</h1>
                <div className='form-container'>
                    <form className='sign-up-form'>
                        <input type="text" placeholder='Enter username' className="username-and-password" required /><br></br>
                        <input type="password" placeholder='Enter password' className="username-and-password" required/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp