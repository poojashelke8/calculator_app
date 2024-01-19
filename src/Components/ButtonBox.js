import React from 'react'
import "../Components/buttonbox.css"

const ButtonBox = ({children}) => {
  return (
    <div className='buttonBox'>{children}</div>
  )
}

export default ButtonBox