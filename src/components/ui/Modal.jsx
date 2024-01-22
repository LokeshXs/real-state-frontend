import React, { useState } from 'react';

const Modal = ({children,isOpen}) => {


  return (
    <>
      <div className={`fixed z-30 top-1/2 right-1/2 translate-y-[-50%] translate-x-[50%] bg-secondaryLight transition-all duration-300 rounded-xl  ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
      {children}

      </div>

      <div className={`fixed top-0 left-0 z-20 bg-[#080a0c] backdrop-blur-md opacity-[0.8] h-screen w-screen ${isOpen ? 'block ' : 'hidden '} `} onClick={() => { setIsOpen((prev) => !prev) }} />

    </>
  )
}

export default Modal

