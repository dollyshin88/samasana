import React from 'react';

function ProfilePhoto(props){

    return (
        <div id='photo-upload-container' className="photo-upload-wrap">
            <div className='form__label'>Your photo</div>
            <div id="photo-upload-cluster">
                <div className='clickable-photo-display'>
                    <div className="profile-photo" style={{backgroundImage: "url('')"}}>
                    </div>
                </div>
                <button className='hyperlink--blue'>Upload new photo</button>
                {/* need onClick handler for the button to upload */}
                {/* {document.getElementById('file').click()} */}
                <div className='form__msg--gray'>Photos help your teammates recognize you in Samasana</div>
                <input id='hidden-profile-photo-upload' type="file" className="hidden-file-input"/>
            </div>
        </div>
    );
}

export default ProfilePhoto;