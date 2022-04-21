import React from 'react';
import './Profile.css'
import '../../App.css'

function Profile(props) {
    return (
        <div className='profileContainer' style={{flexDirection: props.direction}}>
            <div>
                <img src={require("./Avatar.png")} alt='avatar' />
            </div>
            <div className='nameContainer'>
                <div className='profileName'>You</div>
                <div className='profilePoints'>Points:</div>
            </div>    
        </div>
    )
}

export default Profile;