import React from 'react'
import './square.css'

const Square = ({onClick,value}) =>{

    return (
       <button 
       className="square__wrapper"
        onClick={onClick}>
            {value}
           </button>
    )
    }
export default Square;