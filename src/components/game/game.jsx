import React , {useState} from "react";

import {calcWinner} from '../../winner'

 import Board from '../board/board'

import './game.css'
const Game =() => {
    const [board,setBoard] = useState (Array(9).fill(null))
    const [xnext,setxNext] = useState (true)
    const winner =  calcWinner(board)
    
   const handleClick = (index)=>{
       const boardCopy = [...board]

// Определить был ли клик или игра закончена
if (winner || boardCopy[index]) return
// Определить чей ход
boardCopy[index] = xnext ? 'X': 'O'
// Обновление нашего стейта
setBoard(boardCopy)
setxNext(!xnext)
   }

const startGame=()=>{
    return(
        <button className="start__btn" onClick={()=>setBoard(Array(9).fill(null))}>Очистить</button>
    )
}

    return(
        <div className= "game__wrapper">
            {startGame()}
           <Board 
           squares={board}
           click={handleClick}
           /> 
           <p className="game__info">
               {winner ? 'Победитель'+ winner:'Сейчас ходит'+(xnext ? 'X' : 'O')}
           </p>
        </div>
    );
}
export default Game;

