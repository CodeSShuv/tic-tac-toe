import React from 'react'
import "./menu.css"
import { Link } from 'react-router-dom'

const Menu = ({ player1Name, setPlayer1Name, player2Name, setPlayer2Name }) => {
    const changePlayer1Name = (e) => {
        setPlayer1Name(e.target.value)
    }
    const changePlayer2Name = (e) => {
        setPlayer2Name(e.target.value)
    }
    return (
        <div className='inputContainer'>
            <div className='inputArea'>
                <div >
                    <label htmlFor="player1">Player 1: </label>
                    <input type="text" name="" id="player1" value={player1Name} onChange={changePlayer1Name} />
                </div>
                <div>
                    <label htmlFor="player2">Player 2: </label>
                    <input type="text" id='player2' value={player2Name} onChange={changePlayer2Name} />
                </div>
            </div>
            <div className="play">
                <Link to ="/game">Play</Link>
            </div>
        </div>
    )
}

export default Menu