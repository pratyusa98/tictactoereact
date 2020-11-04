import React, {useState}from "react";
import Board from "./components/Board"
import { calculateWinner } from "./helpers"

import "./styles/root.scss"

const App = () => {

  const [board,setBoard] = useState( Array(9).fill(null) );
  const [isXNext,setIsnext] = useState(false);
  
  
  const winner = calculateWinner(board)

  const message = winner ? `Winner Is ${winner}` : `Next Player is ${isXNext ? 'X' : 'O' }`

  console.log(winner)

    const handleSquaredClick = (position) => {

        if( board[position] || winner){
            return;
        }

        //business logic
        setBoard( (prev) => {

            return prev.map((square,pos)=>{
                if(pos === position){
                    return isXNext ? 'X' : 'O'
                }
                return square
            })

        })

        setIsnext( (prev) => !prev)

    }

 return (<div className="app">
    <h1>Tic Tac Toe!</h1>
  <h2>{ message }</h2>
    <Board board={board} handleSquaredClick={handleSquaredClick} />
  </div>
 );
};

export default App;
