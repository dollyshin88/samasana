import React, { useState } from 'react';

function SignupForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        this.props.signup({ name, email, password });
    }

    return (
        <div id='signup-form' className='form session-form'>
            <form onSubmit={}>
                <label>Name:
                    <input type="text" onChange={handleNameChange} value={name}/>
                </label>
                <label>Email:
                    <input type="text" onChange={handleEmailChange} value={email}/>
                </label>
                <label>Name:
                    <input type="password" onChange={handlePasswordChange} value={password}/>
                </label>
                <button id='signup-btn-cont' className='btn form-btn'>Continue</button>
            </form>
        </div>
    );
}