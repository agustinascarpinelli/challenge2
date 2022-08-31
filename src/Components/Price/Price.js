import React, { useEffect,useState } from "react";
import './Price.css'


export const Price = ({price,itemName,itemDescription})=>{
const [btc, setBtc]=useState(null)
let usd=price.toFixed(2)

const getPrice=async()=>{
try{
  await fetch(`https://blockchain.info/tobtc?currency=USD&value=${usd}`)
  .then(res=>res.json())
  .then(res=>setBtc(res.toFixed(10)))
  .catch(error=>{
    console.log('Error in catch', (error))
  })
}
catch(error){
  console.log('Error in data',(error))
}
}
useEffect(()=>{
  const interval=setInterval(()=>{
    getPrice()
  },5000)
  return ()=>clearInterval(interval)
},[])


    return(
        <div className="price">
          <p className="itemName">{itemName}</p>
          <p className="itemDescription">{itemDescription}</p>
          <div className="total">
            <h6>Price in BTC</h6>
            <p>₿ {btc}</p>
            <h6>Price in USD</h6>
            <p>${usd}</p>
            </div>
        </div>
    )
    
}