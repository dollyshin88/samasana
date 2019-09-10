import React, { useState } from 'react';
import ProfilePhoto from './profile_photo';


function SignupProfileForm(props) {
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
        this.props.history.push('/signup/team');
    }

    return (
        <div id='signup-form' className='form session-form'>
            <form className='session-form' onSubmit={handleSubmit}>
                <ProfilePhoto />

                <div className='input-group'>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleNameChange} value={name}/>
                </div>
                <div className='input-group'>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleEmailChange} value={email}/>
                    
                </div>
                <div className='input-group'>
                    <label className="form-label" htmlFor="password">Name</label>
                    <input type="password" id="password" onChange={handlePasswordChange} value={password}/>
                    
                </div>
                <button id='signup-btn-cont' className='btn form-btn' >Continue</button>
            </form>
        </div>
    );
}

export default SignupProfileForm;