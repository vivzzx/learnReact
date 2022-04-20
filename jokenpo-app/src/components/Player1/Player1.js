import React from 'react';
import './Player1.css';

import Balloon from "../Balloon/Balloon";
import Buttons from "../Buttons/Buttons";
import Profile from "../Profile/Profile";


function Player1() {

    return (
        <div className='bothPlays'>
            <div>
                <p>Player 1</p>
                <div className='balloon_player1'>
                    <Buttons />
                    <Balloon />
                </div> 
            </div>
            <div>
                <Profile />
            </div>
        </div>
    )
}

export default Player1;