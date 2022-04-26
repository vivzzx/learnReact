import React, { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

import arrowUp from './assets/images/arrow-up.svg'
import arrowDown from './assets/images/arrow-down.svg'

import paper from './assets/images/paper.svg'
import rock from './assets/images/rock.svg'
import scissors from './assets/images/scissors.svg'


const options = ['paper', 'rock', 'scissors']


function App() {
  const [play1, setPlay1] = useState(options[0])
  const [play2, setPlay2] = useState('questionMark')

  const [pointsP1, setPointsP1] = useState(0)
  const [pointsP2, setPointsP2] = useState(0)

  const increment = () => {
    let index = options.indexOf(play1) + 1
    setPlay1(index >= options.length ? options[0] : options[index])
  }

  const decrement = () => {
    let index = options.indexOf(play1) - 1
    setPlay1(index < 0 ? options[2] : options[index])
  }

  const randomPlay = () => {
    let randomNum = Math.floor(Math.random() * 3)
    let newPlay2 = options[randomNum]
    setPlay2(newPlay2)
    console.log('newPlay: ', options[randomNum])
    console.log('play2: ', play2)
    compareHands(play1, newPlay2)
  }

  const points = (player) => {
    if (player === 'player1') {
      console.log("vc ganhou")
      setPointsP1(prev => prev + 1)
    } else {
      console.log("player2 ganhou")
      setPointsP2(prev => prev + 1)
    }
  }

  const compareHands = (play1, newPlay2) => {
    console.log('play1: ', play1, 'newPlay2: ', newPlay2)
    if (play1 === newPlay2) {
      console.log('empate')
      return 'empate'
    } 
    switch (play1) {
      case 'paper':
        newPlay2 === 'rock' ? points('player1') : points('player2')
        break;
      case 'rock':
        newPlay2 === 'scissors' ? points('player1') : points('player2')
        break;
      case 'scissors':
        newPlay2 === 'paper' ? points('player1') : points('player2')
        break;
      default:
        console.log('erro')
      }
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokenpo challenge</h1>
      </header>
      
      <main> 
        <div className='playersContainer'>
          <div className='player1'>
            <p>Player 1</p>
            <div className='containerButtons'>
              <div className='circle circleGo' onClick={randomPlay}>go!</div> 
              <div className='buttonsLeft'>
                  <div className='circle controls'> 
                    <img src={arrowUp} alt="Change your hand" onClick={increment} />
                  </div>
                  <div className='circle controls'>
                    <img src={arrowDown} alt="Change your hand" onClick={decrement} />
                  </div>
              </div>
            </div>
            <div className='balloon'> 
              <div className={play1 + ' hand'} id='play1'></div>
            </div>
            <div className='profile'>
              <div className='avatarP1'></div>
              <div className='playerInfo'>
                <p className='playerName'>You</p>
                <p className='playerPoints'>Points: {pointsP1}</p>
              </div>
            </div>
          </div>
          <div className=''>
            <p>Player 2</p>
            <div className='balloon invert'>
              <div className={play2 + ' hand'} id='play2'></div>
            </div>
            <div className='profile'>
              <div className='playerInfo playerInfo2'>
                <p className='playerName'>Viv</p>
                <p className='playerPoints'>Points: {pointsP2}</p>
              </div>
              <div className='avatarP2'></div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h2>You dont know this game? Click here!</h2>
        <p>Jokenpo challenge by <a href='https://vivzzx.github.io/'>@Viv Galati</a></p>
      </footer>
    </div>
  )
}

export default App
