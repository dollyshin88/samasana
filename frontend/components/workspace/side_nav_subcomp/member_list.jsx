import React from 'react';
import { initialsSelector } from '../../../reducers/selector_util';

function MemberList(props) {

    function handleMemberClick(e, memberId) {
        //redirect to member tasks page
    }
    
    //need array of members and member initials
    
    function renderMembers(){
        if (props.members.length) {


            return (
                props.members.map(member => (
                    <div>
                    {(member.profile_photo) ? (
                        <div key={member.id} className='user-side-nav-hover__container'>
                            <div className='user-circle nav-circle'>
                                {(member.profile_photo) ? (
                                    <img className='user-circle-photo' src={member.profile_photo}/>
                                ) : (
                                    <div>{initialsSelector(member.name)}</div>
                                )}
                            </div>
                            <div className='user-side-nav-hover__tag'>
                                <div className='user-side-nav-hover__photo-circle'>
                                    <img className='user-side-nav-hover__photo' src={member.profile_photo}/>
                                </div>
                                <div className='user-side-nav-hover__name'>{member.name}</div>
                            </div>
                        </div>
                    ) : (
                        <div key={member.id} className='user-side-nav-hover__container relParent'>
                            <div className='user-circle nav-circle'>
                                {(member.profile_photo) ? (
                                    <img className='user-circle-photo' src={member.profile_photo}/>
                                ) : (
                                    <div>{initialsSelector(member.name)}</div>
                                )}
                            </div>
                        <div className='user-side-nav-hover__nametag'>
                            <div className='user-side-nav-hover__name'>{member.name}</div>
                        </div>
                        </div>
                            
                    )} 
                    </div>
                    ))
            );
        }
    }
    function testingProfilePic() {
        if (props.members.length) {
            return (
                props.members.map(member => (
                    <img style={{width: 20}} src={member.profile_photo}/>
                ))
            )
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