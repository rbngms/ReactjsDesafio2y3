
import React from 'react'
import './styles.css'

export const Button = ({styles}) => {
  return (
    
    <button 
     className ='button-custom'
     style={{...styles}}
     
     >Presion Aqui</button>
  )
}

export default Button