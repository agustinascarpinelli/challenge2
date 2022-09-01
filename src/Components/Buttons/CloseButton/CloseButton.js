import React from 'react'
import './CloseButton.css'
import {useNavigate} from 'react-router-dom'

export const CloseButton = () => {
  const history=useNavigate()
  return (
    <div className='close'><button onClick={()=>history('/')}>X</button></div>
  )
}