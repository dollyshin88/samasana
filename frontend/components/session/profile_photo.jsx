import React, { useState } from 'react';

function ProfilePhoto(props){
    // let [profilePhoto, setProfilePhoto] = useState('');
    let [uploadError, setUploadError] = useState('');
    function onFileUpload(e) {
        let fileType = e.target.files[0].type;
        if (fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'image/jpg') {
            // props.addProfilePhoto(e.target.files[0]);
            previewProfileImg(e.target.files[0]);
        } else {
            e.target.value = null;
            setUploadError('File must be of type .png, .jpeg, or .jpg');
        }
    }

    function previewProfileImg(file) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = readEvent => {
            document.getElementById('profile-photo-preview').src = readEvent.target.result;
            props.addProfilePhoto(readEvent.target.result);
        };
    }

    function renderFileUploadError() {
        if (uploadError !== '') {
            return (
                <p>{uploadError}</p>
            )
        } else { return null; }
    }
    return (
        <div id='photo-upload-container' className="photo-upload-wrap">
            <div className='form__label'>Your photo</div>
            <div id="photo-upload-cluster">
                <div className='profile-photo-container'>
                    <img className='profile-photo-preview' id="profile-photo-preview" />
                </div>
                <button className='hyperlink--blue'>Upload new photo</button>
                {/* need onClick handler for the button to upload */}
                {/* {document.getElementById('file').click()} */}
                <div className='form__msg--gray'>Photos help your teammates recognize you in Samasana</div>
                <input onChange={onFileUpload} 
                    id='hidden-profile-photo-upload' 
                    type="file" 
                    className="hidden-file-input"
                    accept="image/png, .jpeg, .jpg" />
            </div>
            {renderFileUploadError()}
        </div>
    );
}

export default ProfilePhoto;