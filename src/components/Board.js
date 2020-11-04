import React from 'react'
import { Square } from './Square';


const Board = ({board,handleSquaredClick}) => {

    

    const renderSquare = (position) =>{
        return <Square 
        value={board[position]} 
        onClick={() => handleSquaredClick(position)} 
        />
        
    }

    return (
        <div className="board">

            <div className="board-row">

                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }


            </div>
            <div className="board-row">
            { renderSquare(4) }
            { renderSquare(5) }
            { renderSquare(6) }
            </div>

            <div className="board-row">
            { renderSquare(7) }
            { renderSquare(8) }
            { renderSquare(9) }
            </div>
            
        </div>
    );
};

export default Board;
