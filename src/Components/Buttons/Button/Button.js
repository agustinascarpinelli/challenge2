import React, { useState } from "react";
import './Button.css'
import { useNavigate} from "react-router-dom";
export const Button =()=>{
const history=useNavigate()

const handleAdd=()=>{
history('/checkout')
}
    return(
        <button onClick={handleAdd} className="buttonPurchase">Buy it</button>
    )
}