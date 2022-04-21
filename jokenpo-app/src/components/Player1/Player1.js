import React, { useState } from 'react';
import './Player1.css';

import Balloon from "../Balloon/Balloon";
import Plays from '../Plays/Plays';
import Profile from "../Profile/Profile";


function Player1() {
    const [play, setPlay] = useState();
    
    return (
        <div className='bothPlays'>
            <div>
                <p>Player 1</p>
                <div className='bothBalloons'>
                    <Balloon />
                    <Plays direction="row" />
                </div> 
            </div>
            <div className='profileContainer'>
                <Profile />
            </div>
        </div>
    )
}

export default Player1;