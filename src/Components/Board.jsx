import React, { useEffect } from 'react';
import "./board.css";
const Board = ({ cells, turn, setTurn, setCells, gameOver, setGameOver , msg , setMsg , player1Name , player2Name }) => {



  const changeTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
    // setMsg(`${turn === "X"? "O":"X"}'s turn`);

  }
  
// Updating Cells
  const updateCells = (id) => {
    const newCells = cells.map((elem, index) => { //newCells has the updated cell 
      if (index !== parseInt(id) && elem !== "") {
        return elem
      } else if (index === parseInt(id)) {
        return turn
      } return elem
    });
    setCells(newCells) // send ing newCells as an argument to update cells 
   
  }
// Checking the winner of the game
  const checkWinner = () => {
   
    const winChances = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winChances.map((e) => {
      if (cells[e[0]] === cells[e[1]] && cells[e[2]] === cells[e[1]] && cells[e[2]] === "X") {
        setMsg(`${player1Name} Won the game`);
        setGameOver(true);
        return ""

      } else if (cells[e[0]] === cells[e[1]] && cells[e[2]] === cells[e[1]] && cells[e[2]] === "O") {

        console.log("O won the game")
        setMsg(`${player2Name} Won the game`);
        setGameOver(true);
        return ""
      }
      return ""
    })

  }

  const handelClick = (e) => {
    if (!gameOver) {


      if (e.target.innerText !== "") {
        return
      }
      e.target.innerText = turn;
      updateCells(e.target.id)
      changeTurn();
      return
    }
    
  }

  const restart = ()=>{
    setCells(["","","","","","","","",""]);
    setGameOver(false);
    setTurn("X");
    // setMsg("X's Turn");

  }

const checkFilled =()=>{
  let count = 0
  for(let i = 0 ; i <= 9 ; i++){
    if(cells[i] === "" || cells[i] === " "){
      count += 1;
    }
  }
  if(count === 0){
    setGameOver(true)
    setMsg("Draw! Very Tough competition");
  }
return
 }

 
  useEffect(() => {
    checkFilled()
    checkWinner()
   
// eslint-disable-next-line
  }, [cells])



  return (
    <>
      <div className='main-board'>
        <div className="align">

        <div className='scoreCard'>
          <span>{player1Name} {"(X)"}</span>
          <span className='msg'>{turn}</span>
          <span>{player2Name} {"(O)"}</span>
        </div>
        <div className={"board"}>
          {
            cells.map((ele, index) => {
              return (
                <div key={index} id={index} className={'cells'}  onClick={handelClick}>{ele}</div>
              )
            })
          }
        <div className={`cover ${gameOver?"display":"hidden"}`}>
        <div className={`box ${gameOver?"display":"hidden"}`}>

<p className="msg">{msg}</p>
<div className={`btn ${gameOver?"display":"hidden"}`}>
  <button onClick={restart}>Restart</button>
</div>
</div>
        </div>
        </div>
        </div>
       
      </div>

    </>
  )
}

export default Board