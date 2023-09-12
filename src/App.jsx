import { useState } from 'react';
import './App.css';
import Board from "./Components/Board";
import Menu from './Components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [msg, setMsg] = useState()
  const [player1Name,setPlayer1name] = useState("Player 1")
  const [player2Name,setPlayer2name] = useState("Player 2")
  return (<>
    <header>
      <h1><Link to="/tic-tac-toe/">Tic-Tac-Toe</Link></h1>
    </header>


  
    <div className="App">
      <Routes>
        <Route  path='/' element={    <Menu
        player1Name={player1Name}
        player2Name={player2Name}
        setPlayer1Name={setPlayer1name}
        setPlayer2Name={setPlayer2name}
      />}/>
      <Route  path='/game' element= {<Board cells={cells}
        setCells={setCells}
        turn={turn}
        setTurn={setTurn}
        gameOver={gameOver}
        setGameOver={setGameOver}
        msg={msg}
        setMsg={setMsg}
        player1Name={player1Name}
        player2Name={player2Name}
        setPlayer1Name={setPlayer1name}
        setPlayer2Name={setPlayer2name}
      />}/>
      </Routes>
  
     

    </div>
     
  </>
  );
}

export default App;
