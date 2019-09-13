import React from 'react';
import Logo from '../shared/logo';


function SideNav (props) {

    function renderMembers() {
        if (props.members.length) {
            
            let mem = props.members.map((member, i) => (
                <div key={i}>{member.name}</div>
            ))
            return mem;
        }
    }

    function renderProjects() {
        if (props.projects.length) {
            let proj = props.projects.map((project, i) => (
                <div key={i}>{project.name}</div>
            ));

            return proj;
        }   
    }

    return (
        <div className='workspace-side-nav-container'>
            <div className='logo-wrap-workspace'>
                <Logo />
            </div>
            <div className='nav-subcontainer'>
                nav sub container
                <div className='nav-circles-container'>
                    nav circles
                </div>

            </div>
            <div className='onlyfortesting'>
                {renderMembers()}
                {renderProjects()}
            </div>
        </div>
    );
}

export default SideNav;