import React, { useState } from 'react';
import './Plays.css';

import { ReactComponent as ArrowUp } from "./akar-icons_arrow-up.svg";
import { ReactComponent as ArrowDown } from "./akar-icons_arrow-down.svg";

import { ReactComponent as Paper } from "./paper.svg";
import { ReactComponent as Rock } from "./rock.svg"; 
import { ReactComponent as Scissors } from "./scissors.svg";
import { ReactComponent as QuestionMark } from "./interrogacao.svg";
import Buttons from '../Buttons/Buttons';

const options = [
    <Paper />,
    <Rock />,
    <Scissors />
]

function Plays(props) {
    const [play, setPlay] = useState(<Paper />);
    const [play2, setPlay2] = useState(<QuestionMark />);

    const increment = () => setPlay(prev => {
        let index = options.indexOf(prev) + 1

        if (index > 2) {
            return options[0]
        } else {
            return options[index]
        }  
    })

    const decrement = () => setPlay(prev => {
        let index = options.indexOf(prev) - 1
        return index < 0 ? options[2] : options[index];
    })

     const togglePlay = () => {
        const selected = play;
        let randomNum = Math.floor(Math.random() * 3)
        if (randomNum === 0) {
            return setPlay2(<Paper />)
        } else if (randomNum === 1) {
            return setPlay2(<Rock />)
        } else {
            return setPlay2(<Scissors />)
        }
        
    } 

    return (
        <div>
            <div className={props.player + ' containerPlay'}>
                {props.player === "player1" ? play : play2}

                <div className='containerButtons' id='divButtons'>
                        <div className='circleGo' onClick={props.togglePlay}>go!</div> 
                        <div className='buttonsLeft'>
                            <div className='circle' onClick={props.increment}> 
                                <ArrowUp />
                            </div>
                            <div className='circle' onClick={props.decrement}>
                                <ArrowDown />
                            </div>
                        </div>
                    </div>
 
                
            </div>
        </div>
    )
}

export default Plays;

