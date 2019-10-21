import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';


function TeamForm(props) {
    const [teamType, setTeamType] = useState('');
    const [teamName, setTeamName] = useState('');

    function handleTypeChange(e) {
        setTeamType(e.target.value);
    }   

    function handleNameChange(e) {
        setTeamName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // call createWorkspace for the current user
        const workspace = { name: teamName };
        props.createWorkspace(workspace) 
        .then(()=>(props.history.push('/workspace')));

        // future bonus scope:
        // props.history.push('/setup/invite');
    }
    
    return(
        <div className='ctnr-buff--gridpage'>
            
            <div className='signup-container'>
                <div className='signup-container__header'>Tell us about your team</div>
                <p className='signup-container__helper-text'>Teams are groups of people in your organization who work together on projects.</p>

                <form className='form' onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label className="form__label" htmlFor="select-a-type">What type of team are you on?</label>
                        <select onChange={handleTypeChange} name='team-type' className='form__input'>
                            <option selected={teamType === ''} value='select'>Select a type</option>
                            <option selected={teamType === 'software development'} value='software development'>Software Development</option>
                            <option selected={teamType === 'products'} value='products'>Products</option>
                        </select>
                        </div>
                    <div className='input-group'>
                        <label className="form__label" htmlFor="team-name">What is your team called?</label>
                        <input className='form__input' type="teamName" id="team-name" onChange={handleNameChange} value={teamName} placeholder="Eg. Marketing, Design, Special Projects, etc"/>
                    </div>

                    <button className="form__btn form__btn--blue">Create team</button>
                </form>
            </div>
            
        </div>
    );
}

export default withRouter(TeamForm);