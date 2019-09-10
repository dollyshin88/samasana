import React from 'react';

function ProfilePhoto(props){

    return (
        <div id='photo-upload-container'>
            <div id='photo-upload-label'>Your photo</div>
            <div id="photo-upload-cluster">
                <div className='clickable-photo-display'>
                    <div className="profile-photo" style={{backgroundImage: "url('')"}}>
                    </div>
                </div>
                <button className='link-btn photo-upload-btn'>Upload new photo</button>
                {/* need onClick handler for the button to upload */}
                {/* {document.getElementById('file').click()} */}
                <div id='photo-upload-help-msg'>Photos help your teammates recognize you in Samasana</div>
                <input id='hidden-profile-photo-upload' type="file" className="hidden-file-input"/>
            </div>
        </div>
    );
}

export default ProfilePhoto;