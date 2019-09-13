import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    
    useEffect(() => {

        return () => {
            props.clearSessionErrors();
        };
    }, []);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e) {
        
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();
        props.login({ email, password })
            .then(()=> {
                props.closeModal();
                props.history.push('/');
            });
        // close modal and redirect to '/' on success
    }

    function renderErrors() {
        if (props.errors.length) {
            return ( props.errors.map((error, i) => (
                <div key={i} className='form__msg--red'>{error}</div>
            )))
        }
    }

    function handleDemoLogin(e) {
        // todo: modify to have ghost typing as a bonus feature
        const demoEmail = 'demouser@demo.com';
        const demoPassword = 'password'
        props.login({ email: demoEmail, password: demoPassword })
            .then(()=> {
                props.closeModal();
                props.history.push('/');
            });
    }
    
    function handleModalClose(e) {
        props.closeModal();
    }

    return (
        <div id='login-container' className='login-container'>
            <h3 className='login-container__header'>Log in</h3>
            <i className="fas fa-times login-container__close-btn" onClick={handleModalClose}></i>

            <form className='form' onSubmit={handleLogin}>
                {renderErrors()}
                <div className='input-group'>
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input className='form__input' type="text" id="email" onChange={handleEmailChange} value={email} placeholder="name@company.com"/>
                </div>
                <div className='input-group'>
                    <label className="form__label" htmlFor="password">Password</label>
                    <input className='form__input' type="password" id="password" onChange={handlePasswordChange} value={password} placeholder="Password"/>
                </div>

                <button className="form__btn form__btn--purple">Log In</button>
                <div onClick={handleDemoLogin} className="btn demo-btn">Demo Log In</div>
                <p className='login-container__footer'>Don't have an account? <Link className='hyperlink--purple' onClick={handleModalClose} to='/signup/welcome'>Sign up</Link></p>
                

            </form>
        </div>

    );
}

export default LoginForm;