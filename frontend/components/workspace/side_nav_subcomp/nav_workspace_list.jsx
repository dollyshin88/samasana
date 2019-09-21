import React from 'react';
import MemberList from './member_list';
import ProjectNavList from './project_nav_list';


function NavWorkspaceList(props) {

    return (
        <div className='nav-workspace-list scrolly'>
            <div className='nav-workspace-list__title'>{props.currentWorkspace.name}</div>
            <MemberList members={props.members}/>
            <ProjectNavList projects={props.projects}/>
            <img className='side-nav-bottom-img' src={window.invitePeepsImgURL} alt="" />
        </div>
    );
}

export default NavWorkspaceList;