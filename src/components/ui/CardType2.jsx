import React from 'react'

const CardType2 = ({ children, className }) => {
  return (
    <div className={`px-4 py-6 rounded-xl shadow-xl ${className} `}>{
      children
    }</div>
  )
}

export default CardType2