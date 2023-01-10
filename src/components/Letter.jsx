import React from 'react'
import './letter.css'

const Letter = (props) => {
  return (
    <span className={props.className}>
   {props.letter}
    </span>
  )
}

export default Letter