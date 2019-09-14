import React from 'react';
import Logo from '../shared/logo';
import NavMainList from './side_nav_subcomp/nav_main_list';
import NavWorkspaceList from './side_nav_subcomp/nav_workspace_list';

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
            <NavMainList />
            <NavWorkspaceList />
           
        </div>
    );
}

export default SideNav;