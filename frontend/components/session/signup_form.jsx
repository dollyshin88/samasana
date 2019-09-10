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
        props.signup({ name, email, password });
        props.history.push('/setup/team');
    }

    return (
        <div id='signup-form' className='page-container'>
            <div className='signup-container'>
                <div className='signup-container__header'>Set up your profile</div>
                <form className='form' onSubmit={handleSubmit}>
                    <ProfilePhoto />

                    <div className='input-group'>
                        <label className="form__label" htmlFor="name">Name</label>
                        <input className="form__input" type="text" id="name" onChange={handleNameChange} value={name}/>
                    </div>
                    <div className='input-group'>
                        <label className="form__label" htmlFor="email">Email</label>
                        <input className="form__input" type="text" id="email" onChange={handleEmailChange} value={email}/>
                        
                    </div>
                    <div className='input-group'>
                        <label className="form__label" htmlFor="password">Password</label>
                        <input className="form__input" type="password" id="password" onChange={handlePasswordChange} value={password}/>
                        
                    </div>
                    <button id='signup-btn-cont' className="form__btn form__btn--blue" >Continue</button>
                </form>
            </div>
        </div>
    );
}

export default SignupProfileForm;