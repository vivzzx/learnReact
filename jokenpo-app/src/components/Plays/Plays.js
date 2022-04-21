import React, { useState } from 'react';
import './Plays.css';

import { ReactComponent as ArrowUp } from "./akar-icons_arrow-up.svg";
import { ReactComponent as ArrowDown } from "./akar-icons_arrow-down.svg";

import { ReactComponent as Paper } from "./paper.svg";
import { ReactComponent as Rock } from "./rock.svg"; 
import { ReactComponent as Scissors } from "./scissors.svg";

const options = [
    <Paper />,
    <Rock />,
    <Scissors />
]

function Plays() {
    const [play, setPlay] = useState(<Paper />);

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
/*         if (index < 0) {
            return options[2]
        } else {
            return options[index]
        }   */
        return index < 0 ? options[2] : options[index];
    })

/*     const togglePlay = ({target}) => {
        const selected = target.value;
        setPlay((prev) => {
            if (prev.includes(selected)) {
                return prev.filter(t => t !== selected)
            }
        })
    } */

    return (
        <div>
            <div className='containerButtons'>
                <div className='circleGo'>go!</div> 
                <div className='buttonsLeft'>
                    <div className='circle' onClick={increment} value={play}> 
                        <ArrowUp />
                    </div>
                    <div className='circle' onClick={decrement}>
                        <ArrowDown />
                    </div>
                </div>
            </div>
            <div className='containerPlay'>
                {play}
            </div>
        </div>
    )
}

export default Plays;

