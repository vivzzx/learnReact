import React from 'react';
import './Buttons.css';

import { ReactComponent as ArrowUp } from "./akar-icons_arrow-up.svg";
import { ReactComponent as ArrowDown } from "./akar-icons_arrow-down.svg";

function Buttons() {
    return (
        <div className='containerButtons'>
            <div className='circleGo'>go!</div>
            <div className='buttonsLeft'>
                <div className='circle'> 
                    <ArrowUp />
                </div>
                <div className='circle'>
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Buttons

