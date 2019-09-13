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
    //create SideNavItem, MembersList, and ProjectNavList component
    return (
        <div className='workspace-side-nav-container'>
            <div className='logo-wrap-workspace'>
                <Logo />
            </div>
            <div className='nav-subcontainer__main'>
                {/* <SideNavItem label={'Home'} />
                <SideNavItem label={'My Tasks'} /> */}
            </div>
            <div className='nav-subcontainer__workspace'>
                {/* <MembersList /> */}

            </div>
            
        </div>
    );
}

export default SideNav;