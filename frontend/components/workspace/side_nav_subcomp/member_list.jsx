import React from 'react';
import { intitialsSelector, initialsSelector } from '../../../reducers/selector_util';

function MemberList(props) {

    function handleMemberClick(e, memberId) {
        //redirect to member tasks page
    }
    
    //need array of members and member initials
    
    function renderMembers(){
        if (props.members.length) {
            const memberInitials = props.members.map(member => ({ [member.id]: initialsSelector(member.name) }));

            return (
                memberInitials.map((initial) => (
                    <div
                        key={Object.keys(initial)[0]}
                        className='user-circle nav-circle'
                    // onClick={(e) => handleMemberClick(e, Object.keys(initial)[0])}
                    >{Object.values(initial)[0]}</div>
                    ))
            );
        }
    }
    
    return (    
        <div className='member-list-container'>
            { renderMembers() }
            

            {/* enhancement: <div>Invite People</div> */}
        </div>

    );
}
export default MemberList;