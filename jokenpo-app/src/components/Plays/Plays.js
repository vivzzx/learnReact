import React from 'react';
import './Plays.css';

import { ReactComponent as Paper } from "./paper.svg";
import { ReactComponent as Rock } from "./rock.svg"; 
import { ReactComponent as Scissors } from "./scissors.svg";

function Plays() {
    return (
        <div className='containerPlay'>
            <Scissors />
        </div>
    )
};

export default Plays;