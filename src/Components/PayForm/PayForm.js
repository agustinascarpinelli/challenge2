import './PayForm.css'
import React, { useState } from 'react'
import visa from '../../img/visa.svg'
import amex from '../../img/amex.svg'
import diners from '../../img/diners.svg'
import master from '../../img/mastercard.svg'
import creditcard from '../../img/credit-card-solid.svg'
import {useNavigate} from 'react-router-dom'
import { 
  isValid, 
  isExpirationDateValid, 
  isSecurityCodeValid, 
  getCreditCardNameByNumber 
} from 'creditcard.js'

export const PayForm = () => {
const [success, setSuccess]=useState("")
const [error,setError]=useState("")
const [creditCard,setCreditCart]=useState("")
const[creditLogo,setCreditLogo]=useState("")
const[errorMsg,setErrorMsg]=useState("")
const[creditNumber,setCreditNumber]=useState(null)
const[expiration,setExpiration]=useState("")
const[cvc,setCvc]=useState(null)
/*const history=useNavigate()/*/


const validateCreditCardNumber=(value)=>{

  let card= getCreditCardNameByNumber(value)
  console.log(card)
  setCreditNumber(value)
  switch(card){
    case "Visa": setCreditLogo(visa)
    setErrorMsg("")
    break;
    case "Mastercard": setCreditLogo(master)
    setErrorMsg("")
    
    break;
    case "Diners":setCreditLogo(diners)
    setErrorMsg("")
  
      break;
    case "American Express":setCreditLogo(amex)
    setErrorMsg("")

      break;
    default: setCreditLogo(creditcard)
    
      setErrorMsg("Please,enter a valid credit card number")
      break;
  }
if ((card==="Visa" || card==="Mastercard" || card==="Diners" ||  card==="American Express" ) && (isValid(value))){
    setCreditNumber(value)
    return true
}
else{
  setErrorMsg("Please, enter a valid credit card number")
  return false
}
}

const valid=()=>{
let expirationMonth=expiration.slice(0,2)
console.log(expirationMonth)
let expirationYear=expiration.slice(2,4)
console.log(expirationYear)
  if(validateCreditCardNumber(creditNumber) && isSecurityCodeValid(creditNumber,cvc) &&(isExpirationDateValid(expirationMonth,expirationYear))){
  setSuccess("Your order has been carried out successfully")
  setError("")
  /*setTimeout(()=>{
    history('/')
  },8000)*/
}
else{
  setError("Please, enter a valid credit card")
}}

  const cashout=(e)=>{
    e.preventDefault()
    valid()

}
  return (
    <div className='payform'>
    {success ? <div><span>{success}</span></div> : <span></span>}
    {error ? <div><span>{error}</span></div>: <div></div>}
    <form className='form' onSubmit={cashout}>

  
    <label for="cardNumber" className="form-label">Card Number</label>
   <div className='cardInp'><input type="text" maxLength="16" placeholder="0000 - 0000 - 0000 - 0000" id="cardNumber" onChange={(e)=>validateCreditCardNumber(e.target.value)} />{creditLogo? <img className="logo" src={creditLogo} alt={creditCard}/> : <img className="logo" src={creditcard} alt={creditCard}/>}</div> 
    {errorMsg? <span>{errorMsg}</span>:<span></span>}
 
 
    <label for="expirationDate" className="form-label">MM/YY</label>
 <div className='cardInp'><input type="text" maxlength="4"  placeholder="00/00" id="expirationMonth" onChange={e=>setExpiration(e.target.value)}/>  </div>


    <label className="form-label" for="code">CVC Code</label>
    <div className='cardInp'><input type="text" maxlength="3" placeholder="000" className="form-control" id="code" onChange={e=>setCvc(e.target.value)}/></div>


  <div >
  <button type="submit" className="button" >pay now</button>
  </div>
</form>
</div>
  )
}