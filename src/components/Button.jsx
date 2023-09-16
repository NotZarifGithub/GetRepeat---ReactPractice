import React from 'react'

const Button = ({ bgColor, textColor, fontSize, border, borderColor, borderRadius, fontWeight}) => {
  return (
    <button 
        className={
            `${fontSize 
                ? `${fontSize} ${bgColor} ${textColor} ${border} ${borderColor} ${borderRadius} ${fontWeight} py-5 px-14` 
                : "bg-[#38342c] text-white py-1.5 px-4 mr-4hover:brightness-50 transition duration-200 borderRadius rounded-2xl text-base"
            } 
                uppercase font-poppins flex `}>
        Get Started
      </button>
      
  )
}

export default Button