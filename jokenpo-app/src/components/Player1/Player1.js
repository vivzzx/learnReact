import React, { useState } from 'react';
import './Player1.css';

import Balloon from "../Balloon/Balloon";
import Balloon2 from "../Balloon/Balloon2"
import Plays from '../Plays/Plays';
import Profile from "../Profile/Profile";

import { ReactComponent as QuestionTag } from "./interrogacao.svg";
import Buttons from '../Buttons/Buttons';


function Player1() {
    const [play, setPlay] = useState();
    const {play2, setPlay2} = useState(<QuestionTag />)
    
    return (
        <div className='playsContainer'>
            <div className='bothPlays'>
                <div>
                    <p>Player 1</p>
                    <div className='bothBalloons'>
                        
                        <Balloon />
                        <Plays direction="row" player="player1" />
                    </div> 
                </div>
                <div className='profileContainer'>
                    <Profile />
                </div>
            </div>
            <div className='bothPlays'>
            <div>
                <p>Player 2</p>
                <div className='bothBalloons'>
                    <Balloon2 />
                    <Plays direction="row" player="player2" />
                </div> 
            </div>
            <div className='profilePlayer2'>
                <Profile direction="row-reverse" />
            </div>
        </div>
        </div>
    )
}

export default Player1;