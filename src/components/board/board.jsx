import React from 'react'
import Square from '../square/square'
 
import './board.css'



const Board =({squares,click}) => {

    return (
        <div className="board__wrapper">
          {
              squares.map((item,index)=>(
              <Square
               key={index}
              onClick={()=>click(index)}
              value={item}
              />
              ))
          }

        </div>
    )
}
export default Board