import React from 'react';
import './Profile.css'
import '../../App.css'

function Profile() {
    return (
        <div className='profileContainer'>
            <div>
                <img src="./Avatar.png" alt='avatar' />
            </div>
            <div>
                <div className='profileName'>Name</div>
                <div className='profilePoints'>Points</div>
            </div>    
        </div>
    )
}

export default Profile;