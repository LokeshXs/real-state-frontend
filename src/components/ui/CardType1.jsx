import React from 'react'

const CardType1 = ({children,className}) => {
  return (
    <div className={`px-4 py-6 rounded-xl shadow-[0px_0px_36px_0px_rgba(0,78,255,0.2)] ${className} `}>{
children
    }</div>
  )
}

export default CardType1