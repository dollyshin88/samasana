import React from 'react';

function MemberList(props) {
    //need array of members and member initials
    return (    
        <div className='member-list-container'>
            {/* {props.memberInitials.map((initial, i) => (
                <div key={i}>{initial}</div>
            ))} */}
            <div className='user-circle nav-circle'>DS</div>
            <div className='user-circle nav-circle'>Em</div>
            <div className='user-circle nav-circle'>AS</div>

            {/* <div>Invite People</div> */}
        </div>

    );
}
export default MemberList;