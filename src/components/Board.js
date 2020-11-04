import React, {useState} from 'react'
import { Square } from './Square';


const Board = () => {

    const [board,setBoard] = useState( Array(10).fill(null) );

    const [isXNext,setIsnext] = useState(false);
    

    const handleSquaredClick = (position) => {

        if( board[position]){
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
