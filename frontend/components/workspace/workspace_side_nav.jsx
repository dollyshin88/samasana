import React from 'react';
import Logo from '../shared/logo';
import NavMainList from './side_nav_subcomp/nav_main_list';
import NavWorkspaceList from './side_nav_subcomp/nav_workspace_list';

function SideNav (props) {
    // TODO: remove if deadcode?
    function renderMembers() {
        if (props.members.length) {
            
            let mem = props.members.map((member, i) => (
                <div key={i}>{member.name}</div>
            ))
            return mem;
        }
    }
     // TODO: remove if deadcode?
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
            <NavMainList />
            <NavWorkspaceList members={props.members} projects={props.projects} currentWorkspace={props.currentWorkspace}/>
           
        </div>
    );
}

export default SideNav;