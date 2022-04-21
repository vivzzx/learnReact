import React, { useState } from 'react';
import './Player2.css';

import Balloon from '../Balloon/Balloon';
import Plays from '../Plays/Plays';
import Profile from '../Profile/Profile';

import { ReactComponent as Paper } from "../Plays/paper.svg";
import { ReactComponent as Rock } from "../Plays/rock.svg"; 
import { ReactComponent as Scissors } from "../Plays/scissors.svg";
import { ReactComponent as QuestionTag } from "./interrogacao.svg";

const optionsPlayer2 = [
    <Paper />,
    <Rock />,
    <Scissors />
]

export function Player2() {
    const {play2, setPlay2} = useState(<QuestionTag />);
    return (
        <div className='bothPlays'>
            <div>
                <p>Player 2</p>
                <div className='bothBalloons balloon2'>
                    <Balloon />
                </div> 
                <div className='containerPlay2'>
                    {play2}
                </div>
            </div>
            <div className='profilePlayer2'>
                <Profile direction="row-reverse" />
            </div>
        </div>
    )
}

export default Player2;