import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    
    function handleEmailChange(e) {
        console.log(e.target.value);
        console.log(email);
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e) {
        
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();
        props.login({ email, password });
    }
    
    function handleModalClose(e) {
        props.closeModal();
    }

    return (
        <div id='login-container' className='modal-form-container'>
            <h3 className='form-header'>Log in</h3>
            <i className="fas fa-times form-close" onClick={handleModalClose}></i>

            <form className='session-form' onSubmit={handleLogin}>
                <div className='input-group'>
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="text" id="email" onChange={handleEmailChange} value={email} placeholder="name@company.com"/>
                </div>
                <div className='input-group'>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handlePasswordChange} value={password} placeholder="Password"/>
                </div>

                <button className="btn form-btn">Log In</button>
                <p id='signup-text'>Don't have an account? <span className='text-link'><Link onClick={handleModalClose} to='/signup/welcome'>Sign up</Link></span></p>
                

            </form>
        </div>

    );
}

export default LoginForm;